import React from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Song />
      <Player />
    </div>
  );
}

export default App;
