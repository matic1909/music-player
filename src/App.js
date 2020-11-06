import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import GlobalStyle from "./styles/GlobalStyle";
import data from "./data";

function App() {
  const songs = data;
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <GlobalStyle />
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
