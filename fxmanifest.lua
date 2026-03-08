fx_version "cerulean"
use_fxv2_oal "yes"
lua54 "yes"
game "gta5"
version "1.0.0"
description "A simple pausemenu system React + Mantine"
name 'krs_pausemenu'
author "karos7804"

shared_scripts {
  '@ox_lib/init.lua',
  '@qbx_core/modules/lib.lua',
  "shared/**/*.lua"
}

client_scripts {
  '@qbx_core/modules/playerdata.lua',
  "client/**/*.lua"
}

server_scripts {
  "server/**/*.lua"
}

ui_page "web/build/index.html"

files {
  "web/build/index.html",
  "web/build/**/*",
  'web/images/*.png'
}
