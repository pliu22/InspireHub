/*
 * @Date: 2023-05-17 23:28:02
 * @LastEditors: aei(imaei@foxmail.com)
 * @LastEditTime: 2023-05-18 13:22:27
 * @FilePath: \InspireHub\src\main.js
 * @description:
 */
const { app, BrowserWindow } = require("electron");
const path = require("path");
import { Rpc } from "./rpc/rpc.js";
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "logo.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      webviewTag: true,
    },
  });
  // macOS
  if (process.platform === "darwin") {
    app.dock.setIcon(path.join(__dirname, "logo.png"));
  }

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // clear menubar
  mainWindow.setMenuBarVisibility(false);

  // rpc
  const rpc = new Rpc(mainWindow);
  
  // ready-to-show life
  mainWindow.once('ready-to-show', () => {
    rpc.loadUserSetting();
  })

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
