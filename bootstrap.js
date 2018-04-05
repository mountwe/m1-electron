// console.log('testing...');

// main process
const {app, BrowserWindow, Menu} = require('electron')
  const path = require('path')
  const url = require('url')
  require('electron-reload')(__dirname)
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})
  
    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }
  
  app.on('ready', createWindow)

    // win.openDevTools()

     var menu = Menu.buildFromTemplate([
     {   
     
         label:'Electron',
         submenu: [
            {label:"Preferences"},
            {type:'separator'},
            {label:'log',click() {console.log('log item clicked')}}
         ]
        }
     ])
     Menu.setApplicationMenu(menu)



app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    if (win == null) {
        createWindow()
    }
})