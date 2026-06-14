

lib.callback.register('DT_pausemenu:getPlayerData', function(source)
    local Player = exports.qbx_core:GetPlayer(source)
    if not Player then return nil end

    local charInfo = Player.PlayerData.charinfo
    local playerName = (charInfo.firstname or 'Firstname') .. ' ' .. (charInfo.lastname or 'Lastname')
    local dirtyMoney = exports.ox_inventory:Search(source, 'count', 'black_money') or 0
    local wallet = exports.ox_inventory:Search(source, 'count', 'money') or 0

    return {
        playerName = playerName,
        jobName = Player.PlayerData.job.label or Player.PlayerData.job.name, 
        gangName = Player.PlayerData.gang.label or Player.PlayerData.gang.name,
        sex = charInfo.gender == 0 and "Male" or "Female",
        balance = Player.PlayerData.money['bank'] or 0,
        wallet = wallet,
        dirtyMoney = dirtyMoney,
    }
end)

RegisterNetEvent("DT_pausemenu:exitGame", function()
    local src = source
    DropPlayer(src, '\n[Krs Scripts]\nThank you for playing. You have left the server.')
end)