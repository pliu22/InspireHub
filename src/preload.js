const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    onLoadUserSetting: (callback) => ipcRenderer.on('load-user-setting', callback)
})