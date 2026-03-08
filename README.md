
# KRS PAUSEMENU 🎮

**KRS Pausemenu** is a modern, elegant, and high-performance pause menu replacement for FiveM servers. Built with **React** and **Mantine UI**, it replaces the standard GTA V menu with a clean interface, providing players with a quick overview of their character details, map preview, settings, and community links.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Mantine](https://img.shields.io/badge/Mantine-339AF0?style=flat&logo=mantine&logoColor=white)

## ✨ Features
* **Minimalist Design**: Dark UI with high-contrast lime green (`#B7FF00`) accents for maximum readability.
* **Real-time Stats**: Displays Job, Gang, Wallet, Bank, and Dirty Money balance.
* **Integrated Map**: Map preview with a quick-access button to the original GTA V pause menu.
* **Custom Logout Dialog**: Built-in confirmation box for logging out (no external dependencies required).
* **Fully Responsive**: Optimized for various screen resolutions.

## 🛠️ Requirements
* [ox_lib](https://github.com/overextended/ox_lib) (for client/server helper functions).
* Node.js (Required only for UI development or building the project).

## 🚀 Installation

### 1. Clone the Resource
Download and drop the `krs_pausemenu` folder into your server's `resources` directory.

### 2. UI Configuration (For Developers)
If you wish to modify the styles or functionality, follow these steps inside the `web` folder:

* **Install dependencies**:
    ```bash
    npm i
    ```
* **Preview in browser (Dev Mode)**:
    ```bash
    npm run dev
    ```
* **Compile the final build**:
    ```bash
    npm run build
    ```

### 3. Server Configuration
Add the following to your `server.cfg`:
```cfg
ensure krs_pausemenu

```

## ⌨️ Controls & Keybinds

* **Default Key**: `ESCAPE` (This can be remapped by the player in the FiveM Keybind settings).

## 📂 Project Structure

* `client/`: Client-side logic and NUI callback handling.
* `server/`: Database data retrieval and logout events.
* `web/`: React source code, Mantine components, and Vite configuration.

---

## 🤝 Support & Community

For help, bug reports, or to join the community:

* **Discord**: [Join our Community](https://discord.gg/CqfzJXvKvk)
* **Author**: Krs Scripts

---

*Developed with ❤️ by Krs Scripts*

Would you like me to help you with the **GitHub "Release"** process or how to set up the `.gitignore` file to avoid uploading unnecessary `node_modules`?

```
