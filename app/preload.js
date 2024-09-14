const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  shell: {
    openExternal: (url) => ipcRenderer.invoke('open-external', url)
  }
});