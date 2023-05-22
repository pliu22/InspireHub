const { ipcMain, BrowserWindow } = require("electron");
import { getUserSetting } from "../store/index.js";

export class Rpc {
  /**
   * @type { BrowserWindow } mainWindow
   */
  mainWindow;
  /**
   * @param {BrowserWindow} mainWindow
   */
  constructor(mainWindow) {
    this.mainWindow = mainWindow;
  }
  loadUserSetting() {
    this.mainWindow.webContents.send("load-user-setting", 1);
    ipcMain.on('loaded-user-setting',  (_event, value) => {
        console.log('loaded-user-setting -> ', value) // 将打印到 Node 控制台
      })
  }
}
