import { useState } from 'react';
import merryOwl from './assets/merryOwl.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);   
  const [showGifts, setShowGifts] = useState(false);

  const gifts = ["🎁 プレゼント", "🕯 キャンドル", "🌟 星"];

  return (
    <>
      <h1 className="sparkle-text">Merry Christmas</h1>
     <img src={merryOwl} alt="Merry Owl" className="merry-owl" />


      <div className="card">
        <button className="big-button" onClick={() => setCount((c) => c + 1)}>
          フクロウさんが可愛かったらクリックしてね！ {count}
        </button>
        {count >= 1 && <p className="big-text">🎉 クリックありがとうございます！</p>}
      </div>

      <div className="card">
        <button className="big-button" onClick={() => setShowGifts(true)}>
          ギフトを表示する
        </button>
      </div>

      {showGifts && (
        <ul className="big-text">
          {gifts.map((gift, i) => (
            <li key={i}>{gift}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
