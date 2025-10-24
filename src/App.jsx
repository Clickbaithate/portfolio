import { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import BottomBar from './components/BottomBar';

function App() {
  const [fileExplorerMode, setFileExplorerMode] = useState(null); // "file" or "folder"
  const [currentFile, setCurrentFile] = useState(null);

  const handleOpenFileExplorer = (mode) => {
    setFileExplorerMode(mode);
  };

  const handleSelectFile = (filePath) => {
    setCurrentFile(filePath);
    setFileExplorerMode(null);
  };

  return (
    <div className='flex flex-col justify-between w-full h-screen'>
      <TopBar onOpenFileExplorer={handleOpenFileExplorer}/>
      <MainContent
        fileExplorerMode={fileExplorerMode}
        onSelectFile={handleSelectFile}
        currentFile={currentFile}
        onCloseExplorer={() => setFileExplorerMode(null)}
      />
      <BottomBar/>
    </div>
  );
}

export default App;
