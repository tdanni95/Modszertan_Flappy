const { app, BrowserWindow } = require('electron');

let window;
function createWindow() {
	window = new BrowserWindow({
		width: 540,
		height: 960,
		resizable: false,
		frame: false,
		webPreferences: {
			nodeIntegration: true
		}
	});

	window.loadFile(__dirname + '/index.html');

	//window.webContents.openDevTools();

	window.on('closed', () => {
		window = null;
	});
}

app.on('ready', createWindow);
