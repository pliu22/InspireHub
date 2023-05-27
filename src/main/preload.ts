import { contextBridge, ipcRenderer } from 'electron'


console.log("->>>", contextBridge)

contextBridge.exposeInMainWorld('electronAPI', {
    onLoadUserSetting: (callback: any) => ipcRenderer.on('load-user-setting', callback)
})