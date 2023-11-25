const { app, BrowserWindow } = require('electron');
const path = require('node:path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1600,
        height: 900,
        autoHideMenuBar: true,
        // thickFrame: false,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile(path.join(__dirname, './index.html'));
};

app.whenReady().then(() => {
    createWindow();
});

try {
    require('electron-reloader')(module);
// eslint-disable-next-line no-empty
} catch {}
