import React from "react";
import styled from "styled-components";

const LibrarySongStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
  transition: background 0.5s ease;
  img {
    width: 30%;
  }
  &:hover {
    background: rgb(222, 222, 240);
  }
  .song-description {
    padding-left: 1rem;
    h3 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.7rem;
    }
  }
`;

const LibrarySong = ({ song, songSelectHandler }) => {
  return (
    <LibrarySongStyle
      onClick={() => songSelectHandler(song)}
      className={`${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </LibrarySongStyle>
  );
};

export default LibrarySong;
