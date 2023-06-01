const path = require('path');

module.exports = {
  packagerConfig: {
    appVersion: "1.0",
    name: 'InspireHub',
    icon: './public/logo'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
         // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
         iconUrl: path.join(__dirname, 'public/logo.ico'),
         // The ICO file to use as the icon for the generated Setup.exe
         setupIcon: path.join(__dirname, 'public/logo.ico'),
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-vite',
      config: {
        // `build` can specify multiple entry builds, which can be Main process, Preload scripts, Worker process, etc.
        // If you are familiar with Vite configuration, it will look really familiar.
        build: [
          {
            // `entry` is just an alias for `build.lib.entry` in the corresponding file of `config`.
            entry: 'src/main.ts',
            config: 'vite.main.config.mjs',
          },
          {
            entry: 'src/main/preload.ts',
            config: 'vite.preload.config.mjs',
          },
          {
            entry: 'src/main/script/chatGptWebPreload.ts',
            config: 'vite.preload.config.mjs',
          }
        ],
        renderer: [
          {
            name: 'main_window',
            config: 'vite.renderer.config.mjs',
          },
        ],
      },
    },
  ],
};
