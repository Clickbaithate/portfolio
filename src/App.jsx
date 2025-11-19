import { useEffect, useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import BottomBar from './components/BottomBar';

function App() {
  const [fileExplorerMode, setFileExplorerMode] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentFile, setCurrentFile] = useState("readme");
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const handleOpenFileExplorer = (mode) => setFileExplorerMode(mode);

  const handleSelectFile = (filePath) => {
    setCurrentProject(filePath);
    setFileExplorerMode(null);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "github-dark");

    const checkMobile = () => {
      const mobile = window.innerWidth < 1500 || navigator.userAgent.toLowerCase().includes("mobile") || "ontouchstart" in window;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white text-center p-6 font-mono">
        <div>
          <h1 className="text-2xl mb-4">⚠️ Desktop Recommended</h1>
          <p className="text-lg opacity-80">
            This experience is best viewed on a desktop or laptop.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-between w-full h-screen font-mono'>
      <TopBar onOpenFileExplorer={handleOpenFileExplorer} fileExplorerMode={fileExplorerMode} />
      <MainContent
        onOpenFileExplorer={handleOpenFileExplorer}
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
