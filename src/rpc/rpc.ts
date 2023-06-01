import { ipcMain, BrowserWindow } from "electron";
import { getUserSetting } from "../store/index.ts";


export class Rpc {
  mainWindow: BrowserWindow;
  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }
  loadUserSetting() {
    const data = getUserSetting();
    this.mainWindow.webContents.send("load-user-setting", data);
    ipcMain.on('loaded-user-setting',  (_event, value) => {
        console.log('loaded-user-setting -> ', value) // 将打印到 Node 控制台
      })
  }
}
