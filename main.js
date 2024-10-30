import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath, format } from "url";

let mainWindow;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

console.log(`${__filename} // ${__dirname}`);

console.log(path.join(__dirname, "dist/index.html"));

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
