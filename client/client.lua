local pauseMenuActive = false

local function openPauseMenu()
    if LocalPlayer.state.invOpen then return end
    local data = lib.callback.await('DT_pausemenu:getPlayerData', 100)
    if data then
        SendNUIMessage({ action = 'setVisible', data = true })
        SendNUIMessage({
            action = 'updatePlayerData',
            data = {
                name = data.playerName,
                job = data.jobName,
                gang = data.gangName or "None",
                gender = data.sex,
                bank = data.balance,
                wallet = data.wallet,
                dirty = data.dirtyMoney,
                mapImage = Config.ImageMap,
                logo = Config.Logo,
                currencySymbol = Config.CurrencySymbol,
                dirtySymbol = Config.DirtySymbol,
                discordLink = Config.DiscordLink,
                actions = Config.Actions
            }
        })
        SetNuiFocus(true, true)
        TriggerScreenblurFadeIn(0)
        pauseMenuActive = true
    end
end

RegisterNUICallback('hide-ui', function(data, cb)
    TriggerScreenblurFadeOut(0)
    SetNuiFocus(false, false)
    pauseMenuActive = false
    cb('ok')
end)

RegisterNUICallback("action", function(data, cb)
    pauseMenuActive = false

    SetNuiFocus(false, false)
    TriggerScreenblurFadeOut(0)

    SendNUIMessage({
        action = "setVisible",
        data = false
    })

    if data.type == "client" then
        TriggerEvent(data.event)

    elseif data.type == "server" then
        TriggerServerEvent(data.event)

    elseif data.type == "command" then
        ExecuteCommand(data.event)
    end

    cb("ok")
end)

local function updatePauseMenu()
    while true do
        Wait(0)
        DisableControlAction(1, 200, true)
        if IsPauseMenuActive() then
            TriggerScreenblurFadeOut(0)
            pauseMenuActive = false
        end
    end
end

CreateThread(updatePauseMenu)

lib.addKeybind({
    name = 'PauseMenu',
    description = 'Toggle Pause Menu',
    defaultKey = 'ESCAPE',
    onPressed = function()
        if not pauseMenuActive then
            openPauseMenu()
        end
    end
})

RegisterNUICallback('map', function(data, cb)
    pauseMenuActive = false
    SetNuiFocus(false, false)
    TriggerScreenblurFadeOut(0)
    SendNUIMessage({ action = 'setVisible', data = false })
    cb('ok')
    ActivateFrontendMenu("FE_MENU_VERSION_MP_PAUSE", true, -1)
end)

RegisterNUICallback('settings', function(data, cb)
    pauseMenuActive = false
    SetNuiFocus(false, false)
    TriggerScreenblurFadeOut(0)
    SendNUIMessage({ action = 'setVisible', data = false })
    cb('ok')
    ActivateFrontendMenu(GetHashKey('FE_MENU_VERSION_LANDING_MENU'), 0, -1)
end)

RegisterNUICallback('discord', function(data, cb)
    cb('ok')
end)

RegisterNUICallback('logout', function(data, cb)
    lib.print.info("Logout confirmed via UI")
    SetNuiFocus(false, false)
    TriggerScreenblurFadeOut(0)
    SendNUIMessage({ action = 'setVisible', data = false })
    pauseMenuActive = false
    TriggerServerEvent("DT_pausemenu:exitGame")
    cb('ok')
end)
