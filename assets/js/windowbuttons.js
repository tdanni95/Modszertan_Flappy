const { remote } = require('electron');
let close = document.getElementById('close');
let minimize = document.getElementById('minimize');

closeWin = () => {
	remote.getCurrentWindow().close();
};

minimizeWin = () => {
	remote.getCurrentWindow().minimize();
};

close.addEventListener('click', closeWin);

minimize.addEventListener('click', minimizeWin);
