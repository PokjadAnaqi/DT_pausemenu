import React, { useState, useEffect } from "react";
import AppComp from "./components/PauseMenu";
import { useNuiEvent } from "./hooks/useNuiEvent";
import { fetchNui } from "./utils/fetchNui";
import { isEnvBrowser } from "./utils/misc";

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  const [playerData, setPlayerData] = useState({
    name: "Karos",
    job: "Unemployed",
    gang: "None", 
    gender: "Male",
    bank: 0,
    wallet: 0,
    dirty: 0,
    mapImage: "https://cdn.discordapp.com/attachments/1386359443125571795/1416169209783914627/PFHfPSm.png?ex=69ae8e9a&is=69ad3d1a&hm=9f02aec6536c9464b928fe749461f60e32e8b58f3cf1afcce3c8c422e7678520&" 
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
      mapImage: data.mapImage || prev.mapImage
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
    return () => window.removeEventListener("keydown", keyHandler);
  }, [visible]);

  if (!visible) return null;

  return <AppComp playerData={playerData} setVisible={setVisible} />;
};

export default App;