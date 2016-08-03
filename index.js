const registerShortcut = require('hyperterm-register-shortcut');
let activeWindow;
function registerWindow (win) {
  win.on('focus', () => {
    activeWindow = win;
  });
  win.on('blur', () => {
    if(activeWindow === win) {
      activeWindow = undefined;
    }
  });
}
function acceptSuggestion () {
  if(activeWindow) {
    activeWindow.webContents.sendInputEvent({type:'keydown',keyCode:'right'});
    activeWindow.webContents.sendInputEvent({type:'keydown',keyCode:'enter'});
  }
}
module.exports = {
  onApp: registerShortcut('accept', acceptSuggestion),
  onWindow: registerWindow
}
