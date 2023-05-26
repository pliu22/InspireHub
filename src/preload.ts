import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
    onLoadUserSetting: (callback: any) => ipcRenderer.on('load-user-setting', callback)
})