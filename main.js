// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
	let menuAplicacionPlantilla = [];
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		
		icon: __dirname + '/Dory.ico',
		title: 'Dory',
		width: 1024,
		height: 768,
		minWidth: 600,
		minHeight: 320,
		maxWidth: 2048,
		maxHeight: 1024,
		/* 	icon: __dirname + './my-app/favicon.ico', */
		webPreferences: {
			/* 	preload: path.join(__dirname, 'preload.js'), */
			nodeIntegration: false,
		},
	});

	mainWindow.loadFile('./my-app/index.html');
	let menu = Menu.buildFromTemplate(menuAplicacionPlantilla);
	mainWindow.setMenu(menu);
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});
