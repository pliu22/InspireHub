import { ipcMain, BrowserWindow } from "electron";
import { getUserSetting, setUserSetting } from "../store/index.ts";


export class Rpc {
  mainWindow: BrowserWindow;
  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
    ipcMain.on("save-user-setting", (_event, value) => {
      console.log("save-user-setting -> ", value); // print to node console
      // store
      setUserSetting(value);
    })
  }
  loadUserSetting() {
    const data = getUserSetting();
    this.mainWindow.webContents.send("load-user-setting", data);
    ipcMain.on('loaded-user-setting',  (_event, value) => {
        console.log('loaded-user-setting -> ', value) // print to node console
    })
  }
}
