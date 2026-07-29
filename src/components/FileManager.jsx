import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowUp, RotateCw, Folder, FileVideo, 
  ChevronRight, ArrowDownUp
} from 'lucide-react';
import './FileManager.css';
import { formatBytes, formatDate } from '../utils/formatters';

export function FileManager({ fileSystem, onPlayVideo }) {
  const { rootHandle, currentPath, files, openDirectory, navigateTo, goUp, setFiles } = fileSystem;
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedFiles = [...files].sort((a, b) => {
      // Folders always first unless sorting changes that? Windows keeps folders first usually, but let's just sort simply.
      let aVal = a[key];
      let bVal = b[key];
      
      if (aVal === bVal) return 0;
      
      if (aVal === null) return 1;
      if (bVal === null) return -1;

      let comparison = 0;
      if (typeof aVal === 'string') {
        comparison = aVal.localeCompare(bVal, undefined, { numeric: true, sensitivity: 'base' });
      } else {
        comparison = aVal > bVal ? 1 : -1;
      }
      return direction === 'asc' ? comparison : -comparison;
    });
    setFiles(sortedFiles);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return <ArrowDownUp size={12} />;
  };

  if (!rootHandle) {
    return (
      <div className="fm-open-btn-container">
        <button className="fm-open-btn" onClick={openDirectory}>
          Open Course Folder
        </button>
      </div>
    );
  }

  const handleDoubleClick = (entry) => {
    if (entry.kind === 'directory') {
      navigateTo(entry.handle);
    } else if (entry.kind === 'file' && entry.name.match(/\.(mp4|mkv|webm|avi)$/i)) {
      onPlayVideo(entry.file);
    }
  };

  return (
    <div className="file-manager">
      <div className="fm-toolbar">
        <button className="fm-btn" disabled={currentPath.length <= 1} onClick={() => goUp()}>
          <ArrowLeft size={16} />
        </button>
        <button className="fm-btn" disabled={currentPath.length <= 1} onClick={() => goUp()}>
          <ArrowUp size={16} />
        </button>
        <button className="fm-btn" onClick={() => navigateTo(currentPath[currentPath.length - 1])}>
          <RotateCw size={16} />
        </button>
        <div className="fm-address-bar">
          {currentPath.map((handle, index) => (
            <React.Fragment key={index}>
              <div 
                className="fm-address-segment"
                onClick={() => {
                  // If we click on an earlier segment, we want to navigate there
                  // In useFileSystem, navigateTo checks if handle is in currentPath
                  navigateTo(handle);
                }}
              >
                {index === 0 ? 'Course Directory' : handle.name}
              </div>
              {index < currentPath.length - 1 && (
                <ChevronRight size={14} className="fm-address-separator" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div className="fm-main">
        <table className="fm-table">
          <thead>
            <tr>
              <th className="fm-th" onClick={() => handleSort('name')}>
                <div className="fm-th-content">
                  Name {getSortIcon('name')}
                </div>
              </th>
              <th className="fm-th" onClick={() => handleSort('lastModified')}>
                <div className="fm-th-content">
                  Date modified {getSortIcon('lastModified')}
                </div>
              </th>
              <th className="fm-th" onClick={() => handleSort('type')}>
                <div className="fm-th-content">
                  Type {getSortIcon('type')}
                </div>
              </th>
              <th className="fm-th" onClick={() => handleSort('size')}>
                <div className="fm-th-content">
                  Size {getSortIcon('size')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((entry, index) => (
              <tr 
                key={index} 
                className="fm-tr"
                onDoubleClick={() => handleDoubleClick(entry)}
              >
                <td className="fm-td">
                  <div className="fm-name-cell">
                    {entry.kind === 'directory' ? (
                      <Folder size={16} fill="#f8d775" color="#e8c351" />
                    ) : (
                      <FileVideo size={16} color="#0078d7" />
                    )}
                    {entry.name}
                  </div>
                </td>
                <td className="fm-td">{formatDate(entry.lastModified)}</td>
                <td className="fm-td">{entry.type}</td>
                <td className="fm-td">{formatBytes(entry.size)}</td>
              </tr>
            ))}
            {files.length === 0 && (
              <tr>
                <td colSpan="4" className="fm-td" style={{ textAlign: 'center', padding: '20px' }}>
                  This folder is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
