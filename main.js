const { app, BrowserWindow } = require('electron');

let window;
function createWindow() {
	window = new BrowserWindow({
		width: 400,
		height: 600,
		resizable: false,
		frame: false,
		transparent: true,
		
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
