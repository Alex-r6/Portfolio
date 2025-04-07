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



function App() {
  useEffect(() => {
    // setTimeout(() => document.querySelector('#root')?.scrollTo({left : 0, behavior  :"smooth"}), 130)
    // setTimeout(() => document.querySelector('#root')?.scrollTo({top : 0, behavior  :"smooth"}), 130)
    
  }, [])
    const[run_game, setRun_game] = useState(false)
    console.log(run_game)
  return (
    <div className="App" style={{width : shema.map.width}}>
      <CustomTegs/>
      {run_game == false && <StartMenu  setRun_game={setRun_game}/> }
      <Sky />
      <Hero run_game={run_game} setRun_game={setRun_game}/>
      <Ground />
      <Tree/>
      <Mountain/>
      <See_ground/>
    </div>
  );
}

export default App;
