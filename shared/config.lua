Config = {}
Config.Logo = "https://r2.fivemanage.com/ofEPga1iSUQyhdyfxzTMA/DeltaHorizonMain500.png"
Config.ImageMap = "https://r2.fivemanage.com/ofEPga1iSUQyhdyfxzTMA/fantasy.png"
Config.CurrencySymbol = "DTC"
Config.DirtySymbol = "DBC"
Config.DiscordLink = "https://discord.gg/e4mvRC5q7u"

Config.Actions = {
    {
        title = "Quest Board",
        subtitle = "Open Quest Board",
        icon = "quest",
        type = "client",
        event = "quest:open"
    },
    {
        title = "VIP",
        subtitle = "VIP Menu",
        icon = "crown",
        type = "server",
        event = "vip:open"
    },
    {
        title = "CLASS",
        subtitle = "Open Class Menu",
        icon = "package",
        type = "command",
        event = "classmenu"
    }
}