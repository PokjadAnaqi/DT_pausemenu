# DT PAUSEMENU 🎮

**DT Pausemenu** is a modern, premium, and highly customizable pause menu replacement for FiveM servers. Built with **React**, **Mantine UI**, **TypeScript**, and **ox_lib**, it replaces the default GTA V pause menu with an elegant interface that provides players with quick access to character information, server utilities, and configurable actions.

![React](https://img.shields.io/badge/React-20232A?style=flat\&logo=react\&logoColor=61DAFB)
![Mantine](https://img.shields.io/badge/Mantine-339AF0?style=flat\&logo=mantine\&logoColor=white)
![FiveM](https://img.shields.io/badge/FiveM-Ready-orange)

---
![Preview](https://r2.fivemanage.com/ofEPga1iSUQyhdyfxzTMA/preview.png)

# ✨ Features

* 🎨 Modern premium olive-themed interface
* 👤 Character information panel

  * Name
  * Job
  * Gang/Faction
  * Gender
* 💰 Live economy display

  * Bank Balance
  * Wallet
  * Dirty Money
* 🗺️ Interactive map preview
* ⚙️ Quick access to GTA V Settings
* 🌐 Configurable Discord button
* 🚪 Custom logout confirmation dialog
* 🔘 **Dynamic Action Buttons**

  * Trigger Client Events
  * Trigger Server Events
  * Execute Commands
  * Fully configurable through `config.lua`
* 🖼️ Configurable logo
* 🗺️ Configurable map image
* 💱 Configurable currency symbol
* ☢️ Configurable dirty money symbol
* 🔗 Configurable Discord URL
* ⌨️ Uses FiveM Keybind system (default: **ESC**)
* ⚡ Lightweight and optimized
* 📱 Responsive UI
* 🔧 Easy to customize and extend

---

# 🛠 Requirements

* ox_lib
* Node.js (Required only for UI development)

---

# 🚀 Installation

## 1. Download

Place the resource inside your server:

```text
resources/[standalone]/DT_pausemenu
```

---

## 2. Install UI Dependencies (Optional)

Inside the `web` folder:

```bash
npm install
```

---

## 3. Development Mode

```bash
npm run dev
```

---

## 4. Build Production Files

```bash
npm run build
```

---

## 5. server.cfg

```cfg
ensure DT_pausemenu
```

---

# ⚙️ Configuration

All settings can be configured inside:

```lua
config.lua
```

Example:

```lua
Config.ImageMap = "nui://DT_pausemenu/web/images/map.png"

Config.Logo = "https://your-logo.png"

Config.CurrencySymbol = "¤"

Config.DirtySymbol = "☢"

Config.DiscordLink = "https://discord.gg/yourserver"

Config.Actions = {
    {
        title = "Garage",
        subtitle = "Open Garage",
        icon = "garage",
        type = "client",
        event = "garage:open"
    },

    {
        title = "VIP",
        subtitle = "VIP Menu",
        icon = "crown",
        type = "server",
        event = "vip:open"
    },

    {
        title = "Phone",
        subtitle = "Open Phone",
        icon = "package",
        type = "command",
        event = "phone"
    }
}
```

Action buttons are automatically generated from `Config.Actions`, allowing server owners to add or remove buttons without modifying the React UI.

---

# ⌨️ Controls

| Action          | Default |
| --------------- | ------- |
| Open Pause Menu | ESC     |

The key can be changed through the FiveM Keybind Settings menu.

---

# 📦 Built With

* React
* Mantine UI
* TypeScript
* ox_lib

---

# 🤝 Support

For support, bug reports, or suggestions, join our Discord community:

**Discord**

[DELTA HORIZON](https://discord.gg/e4mvRC5q7u)

---

# ❤️ Credits

## Developed by

**Krs Scripts**

## Customized & Designed for

**DELTA HORIZON**
