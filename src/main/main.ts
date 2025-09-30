// src/main/main.ts
import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, "index.html"));
  }
}

app.whenReady().then(createWindow);

// Quit app when all windows are closed (except on macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// Re-create window on macOS when dock icon is clicked & no windows open
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
