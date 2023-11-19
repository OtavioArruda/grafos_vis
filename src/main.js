const { app, BrowserWindow } = require('electron');
const path = require('node:path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            nodeIntegration: true,
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