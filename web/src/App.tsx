import React, { useState, useEffect } from "react";
import AppComp from "./components/PauseMenu";
import { useNuiEvent } from "./hooks/useNuiEvent";
import { fetchNui } from "./utils/fetchNui";
import { isEnvBrowser } from "./utils/misc";

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  interface ActionButton {
    title: string;
    subtitle: string;
    icon: string;
    type: "client" | "server";
    event: string;
  }

  const [playerData, setPlayerData] = useState<{
    name: string;
    job: string;
    gang: string;
    gender: string;
    bank: number;
    wallet: number;
    dirty: number;
    currencySymbol: string;
    dirtySymbol: string;
    logo: string;
    discordLink: string;
    mapImage: string;
    actions: ActionButton[];
  }>({
    name: "Pokjad Anaqi",
    job: "Unemployed",
    gang: "None",
    gender: "Male",
    bank: 10000,
    wallet: 10000,
    dirty: 1000,
    currencySymbol: "DTC ",
    dirtySymbol: "DBC ",
    logo: "https://r2.fivemanage.com/ofEPga1iSUQyhdyfxzTMA/DeltaHorizonMain500.png",
    discordLink: "https://discord.gg/e4mvRC5q7u",
    mapImage: "https://r2.fivemanage.com/ofEPga1iSUQyhdyfxzTMA/fantasy.png",
    actions: [
      {
        title: "Garage",
        subtitle: "Open Garage",
        icon: "garage",
        type: "client",
        event: "garage:open",
      },
      {
        title: "VIP",
        subtitle: "VIP Menu",
        icon: "crown",
        type: "server",
        event: "vip:open",
      },
      {
        title: "Battle Pass",
        subtitle: "Rewards",
        icon: "star",
        type: "client",
        event: "battlepass:open",
      },
    ],
  });

  useNuiEvent<boolean>("setVisible", setVisible);

  useNuiEvent("updatePlayerData", (data: any) => {
    setPlayerData((prev) => ({
      ...prev,
      name: data.name,
      job: data.job,
      gang: data.gang,
      gender: data.gender,
      bank: data.bank,
      wallet: data.wallet,
      dirty: data.dirty,
      currencySymbol: data.currencySymbol ?? prev.currencySymbol,
      dirtySymbol: data.dirtySymbol ?? prev.dirtySymbol,
      discordLink: data.discordLink ?? prev.discordLink,
      mapImage: data.mapImage ?? prev.mapImage,
      logo: data.logo ?? prev.logo,
      actions: data.actions ?? prev.actions,
    }));
  });

  useEffect(() => {
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        if (!isEnvBrowser()) {
          fetchNui("hide-ui");
        }
        setVisible(false);
      }
    };

    window.addEventListener("keydown", keyHandler);
    return () =>
      window.removeEventListener("keydown", keyHandler);
  }, [visible]);

  if (!visible) return null;

  return (
    <AppComp
      playerData={playerData}
      setVisible={setVisible}
    />
  );
};

export default App;