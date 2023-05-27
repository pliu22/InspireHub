import { BrowserWindow, screen }  from 'electron'
const path = require('path')


export default function createGPTFloatWindow() {
  let win2:  BrowserWindow | null //悬浮球
  win2 = new BrowserWindow({
      width: 120, 
      height: 120,
      type: 'toolbar',    //创建的窗口类型为工具栏窗口
      frame: false,   //要创建无边框窗口
      resizable: false, //禁止窗口大小缩放
      transparent: true,  //设置透明
      alwaysOnTop: true,  //窗口是否总是显示在其他窗口之前
      webPreferences: {
        // nodeIntegration: true, //是否集成node
        // contextIsolation: true, //是否上下文隔离
        preload: path.join(__dirname, './preload.js') // 通过预加载将 electron 中的一些 node 的API挂载到window对象上
      }
  });
  //通过获取用户屏幕的宽高来设置悬浮球的初始位置
  const { left, top } = { left: screen.getPrimaryDisplay().workAreaSize.width - 160, top: screen.getPrimaryDisplay().workAreaSize.height - 160 }
  win2.setPosition(left, top) //设置悬浮球位置
  
  win2.loadURL(path.join(__dirname, './renderer/viewGPT/index.html'));

  win2.once('ready-to-show', () => {
    win2!.show()
  });

  win2.on('close', () => {
    win2 = null;
  })

  return win2
}

