import { useState } from 'react';

export function useFileSystem() {
  const [rootHandle, setRootHandle] = useState(null);
  const [currentPath, setCurrentPath] = useState([]); // Array of directory handles
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const openDirectory = async () => {
    try {
      const handle = await window.showDirectoryPicker({ mode: 'read' });
      setRootHandle(handle);
      setCurrentPath([handle]);
      await readDirectory(handle);
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error(err);
        setError(err.message);
      }
    }
  };

  const readDirectory = async (dirHandle) => {
    setLoading(true);
    setError(null);
    try {
      const entries = [];
      for await (const entry of dirHandle.values()) {
        let fileObj = null;
        if (entry.kind === 'file') {
           fileObj = await entry.getFile();
        }
        entries.push({
          name: entry.name,
          kind: entry.kind,
          handle: entry,
          file: fileObj,
          lastModified: fileObj ? fileObj.lastModified : null,
          size: fileObj ? fileObj.size : null,
          type: fileObj ? fileObj.type : 'File folder',
        });
      }
      // Default sort by name, folders first
      entries.sort((a, b) => {
        if (a.kind === b.kind) {
          return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
        }
        return a.kind === 'directory' ? -1 : 1;
      });
      
      setFiles(entries);
    } catch (err) {
      console.error(err);
      setError('Error reading directory: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const navigateTo = async (folderHandle) => {
    if (folderHandle.kind !== 'directory') return;
    
    // Check if it's already in the path (e.g. clicking on breadcrumb)
    const pathIndex = currentPath.findIndex(h => h.name === folderHandle.name);
    let newPath;
    if (pathIndex !== -1) {
       newPath = currentPath.slice(0, pathIndex + 1);
    } else {
       newPath = [...currentPath, folderHandle];
    }
    
    setCurrentPath(newPath);
    await readDirectory(newPath[newPath.length - 1]);
  };

  const goUp = async () => {
    if (currentPath.length > 1) {
      const newPath = currentPath.slice(0, -1);
      setCurrentPath(newPath);
      await readDirectory(newPath[newPath.length - 1]);
    }
  };

  return {
    rootHandle,
    currentPath,
    files,
    loading,
    error,
    openDirectory,
    navigateTo,
    goUp,
    setFiles
  };
}
