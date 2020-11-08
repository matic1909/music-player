import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import GlobalStyle from "./styles/GlobalStyle";
import data from "./data";
import Library from "./components/Library";

function App() {
  const songs = data;
  const [currentSong, setCurrentSong] = useState(songs[1]);
  return (
    <div className="App">
      <GlobalStyle />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
