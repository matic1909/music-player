import React from "react";
import styled from "styled-components";

const SongStyle = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Song = () => {
  return (
    <SongStyle>
      <h1>Picture</h1>
      <h2>Song Name</h2>
      <h2>Artist</h2>
    </SongStyle>
  );
};

export default Song;
