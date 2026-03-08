import React, { useState } from "react";
import { Box, Text, Group, Stack, Image, SimpleGrid, Paper, ThemeIcon, rem, Button, Overlay, Center } from "@mantine/core";
import { 
  IconUser, IconBriefcase, IconGenderMale, IconPigMoney, 
  IconWallet, IconMoneybag, IconSettings, 
  IconLogout, IconMapPin, IconUsersGroup
} from "@tabler/icons-react";
import { fetchNui } from "../utils/fetchNui";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import { TbAlertHexagonFilled } from "react-icons/tb";

interface PauseMenuProps {
  playerData: {
    name: string;
    job: string;
    gang: string;
    gender: string;
    bank: number;
    wallet: number;
    dirty: number;
    mapImage: string; 
  };
  setVisible: (visible: boolean) => void; 
}

const PlayerInfoRow = ({ icon, label, value }: { icon: any, label: string, value: string | number }) => (
  <Group justify="space-between" wrap="nowrap" p="xs" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "8px" }}>
    <Group gap="sm">
      <ThemeIcon variant="filled" color="#B7FF00" size={28} radius={6}>
        {React.cloneElement(icon, { size: 16, color: "#1A1B1E" })}
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
    style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", cursor: "pointer", transition: "background 0.2s ease" }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)")}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)")}
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

  const handleConfirmLogout = () => {
    fetchNui("logout");
    setShowLogoutConfirm(false);
    setVisible(false);
  };

  return (
    <Box style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0, 0, 0, 0.15)", position: 'relative' }}>
      
      {showLogoutConfirm && (
        <Overlay color="#1f1f1f00" backgroundOpacity={0.2} blur={5} zIndex={100}>
          <Center style={{ height: '100%' }}>
            <Paper 
              p={30} 
              radius="lg" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(183, 255, 0, 0.01)", width: 420 }}
            >
              <Stack align="center" gap="md">
                <ThemeIcon size={60} radius="xl" color="#B7FF00" variant="light">
                  <TbAlertHexagonFilled size={35} color="#B7FF00" />
                </ThemeIcon>
                
                <Stack gap={0} align="center">
                  <Text c="white" fw={800} size="xl" tt="uppercase">Logout Dialog</Text>
                  <Text c="dimmed" size="sm" ta="center">Are you sure you want to log out of the session?</Text>
                </Stack>

                <Group grow w="100%" mt="lg">
                  <Button 
                    color="#B7FF00"
                    radius="md"
                    onClick={() => setShowLogoutConfirm(false)}
                    styles={{ label: { color: '#1A1B1E' } }}
                  >
                    Cancel
                  </Button>
                  <Button 
                    color="#B7FF00"
                    radius="md"
                    styles={{ label: { color: '#1A1B1E' } }}
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

      <Box w={950} style={{ opacity: showLogoutConfirm ? 0.3 : 1, transition: 'opacity 0.2s ease' }}>
        <Group mb={40} justify="center">
          <BiSolidBadgeCheck color="#B7FF00" size={40} />
          <Text fw={900} size={rem(36)} c="white" style={{ letterSpacing: rem(2), textTransform: 'uppercase' }}>
            Krs Scripts
          </Text>
        </Group>

        <SimpleGrid cols={2} spacing="xl" mb="xl">
          <Paper 
            radius="lg" 
            onClick={() => fetchNui("map")} 
            style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", overflow: "hidden", height: 520, position: 'relative', cursor: 'pointer' }}
          >
            <Image 
              src={playerData.mapImage} 
              height="100%" 
              width="100%" 
              fit="cover" 
            />
            <Box style={{ position: 'absolute', top: 15, left: 15, background: 'rgba(255, 255, 255, 0.08)', padding: '6px 14px', borderRadius: '10px'}}>
              <Group gap={8}>
                <IconMapPin size={14} color="#B7FF00" />
                <Text fw={800} c="white" size="xs" tt="uppercase">Map View</Text>
              </Group>
            </Box>
          </Paper>

          <Paper
            p="xl"
            radius="lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              height: 520,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Group gap="sm" mb="xl">
              <IconUser size={26} color="#B7FF00" />
              <Text fw={800} c="white" size="xl" tt="uppercase">
                Character Details
              </Text>
            </Group>

            <Stack gap="xs">
              <PlayerInfoRow icon={<IconUser />} label="Name" value={playerData.name} />
              <PlayerInfoRow icon={<IconBriefcase />} label="Job" value={playerData.job} />
              <PlayerInfoRow icon={<IconUsersGroup />} label="Gang" value={playerData.gang} />
              <PlayerInfoRow icon={<IconGenderMale />} label="Gender" value={playerData.gender} />
              <PlayerInfoRow icon={<IconPigMoney />} label="Balance" value={`$${playerData.bank.toLocaleString()}`} />
              <PlayerInfoRow icon={<IconWallet />} label="Wallet" value={`$${playerData.wallet.toLocaleString()}`} />
              <PlayerInfoRow icon={<IconMoneybag />} label="Dirty" value={`$${playerData.dirty.toLocaleString()}`} />
            </Stack>
          </Paper>
        </SimpleGrid>

        <SimpleGrid cols={3} spacing="lg">
          <MenuButton
            icon={<IconSettings />}
            title="Settings"
            subtitle="Configurations"
            color="#B7FF00"
            onClick={() => fetchNui("settings")}
          />

          <MenuButton
            icon={<FaDiscord />}
            title="Discord"
            subtitle="Join our community"
            color="#B7FF00"
            onClick={() =>
              (window as any).invokeNative("openUrl", "https://discord.gg/CqfzJXvKvk")
            }
          />

          <MenuButton
            icon={<IconLogout />}
            title="Logout"
            subtitle="Quit Session"
            color="#B7FF00"
            onClick={() => setShowLogoutConfirm(true)}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}