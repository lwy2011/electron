const {app, BrowserWindow} = require("electron");
require("./dist/index.js");

function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // 加载index.html文件
    // win.loadFile("./web/index.html");

    win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);