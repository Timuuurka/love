import React from 'react';
import './App.css';

function App() {
  const playAudio = () => {
    const audio = document.getElementById('voiceMessage');
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="App">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="background.mp4" type="video/mp4" />
        Твой браузер не поддерживает видео.
      </video>

      <div className="center">
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1 style={{ marginBottom: '20px' }}>Для моей самой любимой ❤️</h1>
          <button className="heart-button" onClick={playAudio}>❤️</button>
        </div>
      </div>

      <audio id="voiceMessage">
        <source src="voice.mp3" type="audio/mpeg" />
        Твой браузер не поддерживает аудио.
      </audio>
    </div>
  );
}

export default App;
