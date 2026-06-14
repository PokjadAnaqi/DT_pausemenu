import React, { useState } from "react";
import { Box, Text, Group, Stack, Image, SimpleGrid, Paper, ThemeIcon, rem, Button, Overlay, Center } from "@mantine/core";
import {
  IconUser,
  IconId,
  IconHammer,
  IconShield,
  IconUserScan,
  IconCoins,
  IconCash,
  IconSkull,
  IconSettings,
  IconLogout,
  IconMapPin,
  IconCar,
  IconHome,
  IconStar,
  IconCrown,
  IconPackage,
  IconUsersGroup,
} from "@tabler/icons-react";
import { fetchNui } from "../utils/fetchNui";
import { FaDiscord } from "react-icons/fa";
import { TbAlertHexagonFilled } from "react-icons/tb";

const actionIcons: Record<string, any> = {
  settings: IconSettings,
  garage: IconCar,
  house: IconHome,
  star: IconStar,
  crown: IconCrown,
  package: IconPackage,
  faction: IconUsersGroup,
};

interface ActionButton {
  title: string;
  subtitle: string;
  icon: string;
  type: "client" | "server";
  event: string;
}

interface PauseMenuProps {
  playerData: {
    name: string;
    job: string;
    gang: string;
    gender: string;
    bank: number;
    wallet: number;
    dirty: number;
    logo: string;
    mapImage: string;
    currencySymbol: string;
    dirtySymbol: string;
    discordLink: string;
    actions: ActionButton[];
  };
  setVisible: (visible: boolean) => void;
}

const PlayerInfoRow = ({ icon, label, value }: { icon: any, label: string, value: string | number }) => (
  <Group justify="space-between" wrap="nowrap" p="xs" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "8px" }}>
    <Group gap="sm">
      <ThemeIcon variant="filled" color="#805e14" size={28} radius={6}>
        {React.cloneElement(icon, { size: 16, color: "#0d0d08" })}
      </ThemeIcon>
      <Text fw={600} size="sm" c="white">{label}:</Text>
    </Group>
    <Text size="sm" c="white" fw={700} style={{ opacity: 0.8 }}>{value}</Text>
  </Group>
);

const MenuButton = ({ icon, title, subtitle, onClick, color = "gray" }: { icon: any, title: string, subtitle: string, onClick?: () => void, color?: string }) => (
  <Paper
    p="md"
    radius="lg"
    onClick={onClick}
    style={{ backgroundColor: "#161710", cursor: "pointer", transition: "background 0.2s ease" }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)")}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#161710")}
  >
    <Group gap="md">
      <ThemeIcon variant="light" color={color} size="lg" radius="md">{icon}</ThemeIcon>
      <Stack gap={0}>
        <Text fw={700} size="sm" c="white">{title}</Text>
        <Text size="xs" c="dimmed">{subtitle}</Text>
      </Stack>
    </Group>
  </Paper>
);

export default function AppComp({ playerData, setVisible }: PauseMenuProps) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleAction = (action: ActionButton) => {
    fetchNui("action", {
      type: action.type,
      event: action.event,
    });
  };

  const handleConfirmLogout = () => {
    fetchNui("logout");
    setShowLogoutConfirm(false);
    setVisible(false);
  };

  return (
    <Box
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#16171077",
        position: "relative",
      }}
    >
      {showLogoutConfirm && (
        <Overlay
          color="#000"
          backgroundOpacity={0.45}
          blur={8}
          zIndex={100}
        >
          <Center style={{ height: "100%" }}>
            <Paper
              p={30}
              radius="lg"
              style={{
                background: "#161710",
                border: "1px solid rgb(217, 180, 90)",
                boxShadow: "0 0 30px rgba(200, 160, 74, 0.12)",
                width: 420,
              }}
            >
              <Stack align="center" gap="md">
                <ThemeIcon
                  size={60}
                  radius="xl"
                  variant="light"
                  color="#c8a04a"
                >
                  <TbAlertHexagonFilled
                    size={35}
                    color="#c84a4a"
                  />
                </ThemeIcon>

                <Stack gap={2} align="center">
                  <Text
                    c="#ece7d0"
                    fw={800}
                    size="xl"
                    tt="uppercase"
                  >
                    Logout
                  </Text>

                  <Text
                    c="#8a8c6a"
                    size="sm"
                    ta="center"
                  >
                    Are you sure you want to log out of the
                    session?
                  </Text>
                </Stack>

                <Group grow w="100%" mt="lg">
                  <Button
                    radius="md"
                    color="#c8a04a"
                    styles={{
                      label: {
                        color: "#0d0d08",
                        fontWeight: 700,
                      },
                    }}
                    onClick={() =>
                      setShowLogoutConfirm(false)
                    }
                  >
                    Cancel
                  </Button>

                  <Button
                    radius="md"
                    color="#c8a04a"
                    styles={{
                      label: {
                        color: "#0d0d08",
                        fontWeight: 700,
                      },
                    }}
                    onClick={handleConfirmLogout}
                  >
                    Confirm
                  </Button>
                </Group>
              </Stack>
            </Paper>
          </Center>
        </Overlay>
      )}

      <Box
        w={950}
        style={{
          opacity: showLogoutConfirm ? 0.3 : 1,
          transition: "opacity .2s ease",
        }}
      >
        <Group mb={40} justify="center" gap="md">
          <Image
            src={playerData.logo}
            w={52}
            h={52}
            fit="contain"
          />

          <Text
            fw={900}
            size={rem(36)}
            c="#ece7d0"
            style={{
              letterSpacing: rem(2),
              textTransform: "uppercase",
            }}
          >
            DELTA HORIZON
          </Text>
        </Group>

        <SimpleGrid cols={2} spacing="xl" mb="xl">
          <Paper
            radius="lg"
            onClick={() => fetchNui("map")}
            style={{
              background: "#161710",
              border:
                "1px solid #d9b45a",
              overflow: "hidden",
              height: 520,
              position: "relative",
              cursor: "pointer",
              boxShadow:
                "0 0 25px rgba(200,160,74,.08)",
            }}
          >
            <Image
              src={playerData.mapImage}
              height="100%"
              width="100%"
              fit="cover"
            />

            <Box
              style={{
                position: "absolute",
                top: 15,
                left: 15,
                background: "rgba(22,23,16,.92)",
                border:
                  "1px solid #ac8f45",
                padding: "6px 14px",
                borderRadius: 10,
              }}
            >
              <Group gap={8}>
                <IconMapPin
                  size={14}
                  color="#c8a04a"
                />

                <Text
                  fw={800}
                  c="#ece7d0"
                  size="xs"
                  tt="uppercase"
                >
                  Map View
                </Text>
              </Group>
            </Box>
          </Paper>

          <Paper
            p="xl"
            radius="lg"
            style={{
              background: "#161710",
              border:
                "1px solid #d9b45a",
              boxShadow:
                "0 0 25px rgba(200,160,74,.08)",
              height: 520,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Group gap="sm" mb="xl">
              <IconUser
                size={26}
                color="#c8a04a"
              />

              <Text
                fw={800}
                c="#ece7d0"
                size="xl"
                tt="uppercase"
              >
                Character Details
              </Text>
            </Group>

            <Stack gap="xs">
              <PlayerInfoRow
                icon={<IconId />}
                label="Name"
                value={playerData.name}
              />

              <PlayerInfoRow
                icon={<IconHammer />}
                label="Job"
                value={playerData.job}
              />

              <PlayerInfoRow
                icon={<IconShield />}
                label="Gang"
                value={playerData.gang}
              />

              <PlayerInfoRow
                icon={<IconUserScan />}
                label="Gender"
                value={playerData.gender}
              />

              <PlayerInfoRow
                icon={<IconCoins />}
                label="Balance"
                value={`${playerData.currencySymbol}${playerData.bank.toLocaleString()}`}
              />

              <PlayerInfoRow
                icon={<IconCash />}
                label="Wallet"
                value={`${playerData.currencySymbol}${playerData.wallet.toLocaleString()}`}
              />

              <PlayerInfoRow
                icon={<IconSkull />}
                label="Dirty"
                value={`${playerData.dirtySymbol}${playerData.dirty.toLocaleString()}`}
              />
            </Stack>
          </Paper>
        </SimpleGrid>

        <Stack gap="lg">
          <SimpleGrid cols={3} spacing="lg">
            <MenuButton
              icon={<IconSettings />}
              title="Settings"
              subtitle="Configurations"
              color="#c8a04a"
              onClick={() => fetchNui("settings")}
            />

            <MenuButton
              icon={<FaDiscord />}
              title="Discord"
              subtitle="Join our community"
              color="#c8a04a"
              onClick={() =>
                (window as any).invokeNative(
                  "openUrl",
                  playerData.discordLink
                )
              }
            />

            <MenuButton
              icon={<IconLogout />}
              title="Logout"
              subtitle="Quit Session"
              color="#c8a04a"
              onClick={() => setShowLogoutConfirm(true)}
            />
          </SimpleGrid>

          {playerData.actions?.length > 0 && (
            <SimpleGrid cols={3} spacing="lg">
              {playerData.actions.map((action, index) => {
                const Icon =
                  actionIcons[action.icon.toLowerCase()] ??
                  IconSettings;

                return (
                  <MenuButton
                    key={index}
                    icon={<Icon />}
                    title={action.title}
                    subtitle={action.subtitle}
                    color="#c8a04a"
                    onClick={() => handleAction(action)}
                  />
                );
              })}
            </SimpleGrid>
          )}
        </Stack>
      </Box>
    </Box>
  );
}