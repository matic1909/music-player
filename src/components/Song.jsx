import React from "react";
import styled from "styled-components";

const SongStyle = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 20%;
    border-radius: 50%;
  }

  h2 {
    padding: 3rem 1rem 1rem 1rem;
  }
  h3 {
    font-size: 1rem;
  }
`;

const Song = ({ song }) => {
  return (
    <SongStyle>
      <img src={song.cover} alt={song.name} />
      <h2>{song.name}</h2>
      <h3>{song.artist}</h3>
    </SongStyle>
  );
};

export default Song;
