import { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import BottomBar from './components/BottomBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-between w-full h-screen'>
      <TopBar/>
      <MainContent/>
      <BottomBar/>
    </div>
  )
}

export default App
