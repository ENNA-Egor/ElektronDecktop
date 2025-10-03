const { app, BrowserWindow } = require('electron')

const path = require('node:path')
 console.log (__dirname)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
 

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})