import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    background: transparent;
    cursor: pointer;
    border: 2px solid rgb(65, 65, 65);
    padding: 0.5rem;
    transition: all 0.3 ease;

    &:hover {
      background: rgb(65, 65, 65);
      color: white;
    }
  }
`;

const Nav = ({ libraryHidden, setLibraryHidden }) => {
  return (
    <NavStyle>
      <h1>MyTunes</h1>
      <button onClick={() => setLibraryHidden(!libraryHidden)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </NavStyle>
  );
};

export default Nav;
