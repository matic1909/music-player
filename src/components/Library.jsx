import React from "react";
import styled from "styled-components";
import LibrarySong from "./LibrarySong";

const LibraryStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  overflow: scroll;
  h2 {
    padding: 2rem;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }

  /* Works on Chrome/Edge/Safari */
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.7);
    border-radius: 20px;
    border: transparent;
  }

  .selected {
    background: rgb(165, 181, 228);
  }
`;

const Library = ({ songs, songSelectHandler }) => {
  return (
    <LibraryStyle>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            key={song.id}
            songSelectHandler={songSelectHandler}
          />
        ))}
      </div>
    </LibraryStyle>
  );
};

export default Library;
