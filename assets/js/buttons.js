const { remote } = require('electron');
let close = document.getElementById('close');
let minimize = document.getElementById('minimize');

let start = document.getElementById('start');
var reset = document.getElementById('reset');

closeWin = () => {
	remote.getCurrentWindow().close();
};

minimizeWin = () => {
	remote.getCurrentWindow().minimize();
};

resetWin = () => {
	window.location.reload();
};

close.addEventListener('click', closeWin);

minimize.addEventListener('click', minimizeWin);

reset.addEventListener('click', resetWin);
