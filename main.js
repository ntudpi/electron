const {app, BrowserWindow, ipcMain} = require('electron');
const Store = require('./store.js');

let mainWindow; //do this so that the window object doesn't get GC'd


// First instantiate the class
const store = new Store({
  // We'll call our data file 'user-pass'
  configName: 'user-pass',
  defaults: {
    "c170055": {"password": "123123", "domain": "1"},
    "test": {"password": "test", "domain": "1"}
  }
});


function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 700, height: 800});

  // Load the index.html of the app.
  mainWindow.loadFile('signin.html');

  /**
  // Build menu from template.
  const menu = Menu.buildFromTemplate(template);

  // Insert menu.
  Menu.setApplicationMenu(menu);
  */
}


// Listen for app to be ready.
app.on('ready', createWindow);

/**
// Template for menu
const template = [
  {
    label: 'View',
    submenu: [
      {role: 'reload'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click() {
          require('electron').shell.openExternal('https://electronjs.org');
        }
      }
    ]
  }
];
*/

// Extra menu if macOS
if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        {role: 'quit'}
      ]
    })
}

ipcMain.on('signin:submit', (e, data) => {
  const p = data["password"];
  const d = data["domain"];
  const fetched = store.get(data["username"]);

  // console.log("p: " + p);
  // console.log("d: " + d);
  // console.log("fetched: " + fetched);

  if (store.get(data["username"]) && p == fetched["password"] && d == fetched["domain"]) {
    mainWindow.loadFile('index.html');
  }
  else {
    mainWindow.webContents.send('signin:check', "false");
  }

  // console.log(app.getPath('userData'));
});