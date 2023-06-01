import { BrowserWindow, screen }  from 'electron'
const path = require('path')
declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;



export default function createGPTFloatWindow() {
  let gptFloatWindow:  BrowserWindow | null //悬浮球
  gptFloatWindow = new BrowserWindow({
      width: 300, 
      height: 450,
      // type: 'toolbar',    //创建的窗口类型为工具栏窗口
      frame: false,   //要创建无边框窗口
      // resizable: false, //禁止窗口大小缩放
      // transparent: true,  //设置透明
      alwaysOnTop: true,  //窗口是否总是显示在其他窗口之前
      webPreferences: {
        webviewTag: true,
        // nodeIntegration: true, //是否集成node
        // contextIsolation: true, //是否上下文隔离
        preload: path.join(__dirname, './preload.js') // 通过预加载将 electron 中的一些 node 的API挂载到window对象上
      }
  });
  //通过获取用户屏幕的宽高来设置悬浮球的初始位置
  const { left, top } = { left: screen.getPrimaryDisplay().workAreaSize.width - 300, top: 100}
  gptFloatWindow.setPosition(left, top, true) //设置悬浮球位置


  gptFloatWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL + '/gptFloat');

  gptFloatWindow.once('ready-to-show', () => {
    gptFloatWindow!.show()
  });

  gptFloatWindow.on('close', () => {
    gptFloatWindow = null;
  })

  gptFloatWindow.webContents.openDevTools();

  return gptFloatWindow
}
