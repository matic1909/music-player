import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import GlobalStyle from "./styles/GlobalStyle";
import data from "./data";
import Nav from "./components/Nav";

function App() {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [libraryHidden, setLibraryHidden] = useState(true);
  return (
    <div className={`App ${libraryHidden ? "" : "library-active"}`}>
      <GlobalStyle />
      <Nav libraryHidden={libraryHidden} setLibraryHidden={setLibraryHidden} />
      <Song currentSong={currentSong} />
      <Player
        libraryHidden={libraryHidden}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
    </div>
  );
}

export default App;
