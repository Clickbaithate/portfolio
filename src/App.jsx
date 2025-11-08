import { useEffect, useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import BottomBar from './components/BottomBar';

function App() {

  const [fileExplorerMode, setFileExplorerMode] = useState(null); // "file" or "folder"
  const [currentProject, setCurrentProject] = useState(null); // 
  const [currentFile, setCurrentFile] = useState("readme");

  const handleOpenFileExplorer = (mode) => {
    setFileExplorerMode(mode);
  };

  const handleSelectFile = (filePath) => {
    setCurrentProject(filePath);
    setFileExplorerMode(null);
  };

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", "dracula");
  // }, []);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div className='flex flex-col justify-between w-full h-screen'>
      <TopBar onOpenFileExplorer={handleOpenFileExplorer} fileExplorerMode={fileExplorerMode}/>
      <MainContent
        fileExplorerMode={fileExplorerMode}
        onSelectFile={handleSelectFile}
        currentProject={currentProject}
        onCloseExplorer={() => setFileExplorerMode(null)}
        currentFile={currentFile}
        setCurrentFile={setCurrentFile}
        setPos={setPos}
      />
      <BottomBar line={pos.y} column={pos.x} />
    </div>
  );
}

export default App;
