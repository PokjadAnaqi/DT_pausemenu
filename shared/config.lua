Config = {}
Config.Logo = "https://r2.fivemanage.com/ofEPga1iSUQyhdyfxzTMA/DeltaHorizonMain500.png"
Config.ImageMap = "https://r2.fivemanage.com/ofEPga1iSUQyhdyfxzTMA/fantasy.png"
Config.CurrencySymbol = "DTC"
Config.DirtySymbol = "DBC"
Config.DiscordLink = "https://discord.gg/e4mvRC5q7u"

Config.Locales = {
    name = "Identity",
    job = "Role",
    gang = "Faction",
    gender = "Gender",
    balance = "Caps",
    wallet = "Coin",
    dirty = "Black Market",
}

Config.Actions = {
    {
        title = "Quest Board",
        subtitle = "Open Quest Board",
        icon = "crown",
        type = "client",
        event = "DT_questsystem:OpenLog"
    },
    {
        title = "VIP Menu",
        subtitle = "Open VIP Menu",
        icon = "crown",
        type = "command",
        event = "openvipmenu"
    },
    {
        title = "Class System",
        subtitle = "Open Class Menu",
        icon = "package",
        type = "command",
        event = "classmenu"
    }
}

Config.Updates = {
    {
        title = "v1.2.0",
        date = "14 Jun 2026",
        description = {
            "Added Fishing System",
            "Added Survivor Pass",
            "Improved Inventory",
            "Fixed Vehicle Bug"
        }
    },

    {
        title = "v1.1.0",
        date = "10 Jun 2026",
        description = {
            "Added Zombie AI",
            "Added Safezone",
            "Improved Performance 🔥"
        }
    }
}