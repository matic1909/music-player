import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function readableDuration(seconds) {
  let sec = Math.floor(seconds);
  let min = Math.floor(sec / 60);
  if (!sec) return "00:00";
  min = min >= 10 ? min : "0" + min;
  sec = Math.floor(sec % 60);
  sec = sec >= 10 ? sec : "0" + sec;
  return min + ":" + sec;
}

const PlayerStyle = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .time-control {
    width: 50%;
    display: flex;

    input {
      width: 100%;
    }

    p {
      padding: 1rem;
    }
  }

  .play-control {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  svg {
    cursor: pointer;
  }
`;

const Player = ({ currentSong, setCurrentSong, songs }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeInfo, setTimeInfo] = useState({
    current: null,
    left: null,
  });
  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSongHandler = () => {
    setCurrentSong(songs[(songs.indexOf(currentSong) + 1) % songs.length]);
  };

  const prevSongHandler = () => {
    const currentIndex = songs.indexOf(currentSong);
    if (currentIndex > 0) {
      setCurrentSong(songs[currentIndex - 1]);
    } else {
      console.log("This is the first song.");
    }
  };

  const timeUpdateHandler = (e) => {
    const times = {
      current: e.target.currentTime,
      left: e.target.duration - e.target.currentTime,
    };
    setTimeInfo({ ...times });
  };

  return (
    <PlayerStyle>
      <div className="time-control">
        <p>{readableDuration(timeInfo.current)}</p>
        <input type="range" />
        <p>{readableDuration(timeInfo.left)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={prevSongHandler}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={nextSongHandler}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onCanPlay={(e) => {
          const times = {
            current: e.target.currentTime,
            left: e.target.duration - e.target.currentTime,
          };
          setTimeInfo({ ...times });
        }}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </PlayerStyle>
  );
};

export default Player;
