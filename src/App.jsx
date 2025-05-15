import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/portfolio.css'
import { Ground } from './components/ground/Ground';
import { Sky } from './components/sky/Cloud';
import { shema } from './shema';
import Hero from './components/hero/Hero';
import { Tree } from './components/tree/Tree';
import { Mountain } from './components/mountain/Mountain';
import { See_ground } from './components/see_ground/See_ground';
import { CustomTegs } from './components/CustomTegs/CustomTegs';
import { StartMenu } from './components/loading/StartMenu';
import { DownloadWithFileSaver } from './components/SV/SV';
import { linkIMG } from './helper/helper';

// !!!
// let touchStartX = 0;

// window.addEventListener('touchstart', (e) => {
//   touchStartX = e.touches[0].clientX;
// }, { passive: false });

// window.addEventListener('touchmove', (e) => {
//   const touchX = e.touches[0].clientX;
//   const deltaX = touchX - touchStartX;

//   // если свайп начинается от самого левого края и двигается вправо — отменим его
//   if (touchStartX < 20 && deltaX > 10) {
//     e.preventDefault();
//   }
// }, { passive: false });
// !!


function App() {
  const [run_game, setRun_game] = useState(false);
  
  return (
    <div className="App" style={{ width: shema.map.width }}>
      <DownloadWithFileSaver />
      <CustomTegs />
      {run_game == false && <StartMenu setRun_game={setRun_game} />}
      <Sky />
      <Hero run_game={run_game} setRun_game={setRun_game} />
      <Ground />
      <Tree />
      <Mountain />
      <See_ground />
    </div>
  );
}

export default App;
