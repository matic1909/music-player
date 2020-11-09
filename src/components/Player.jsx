import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Library from "./Library";

const PlayerStyle = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .time-control {
    width: 50%;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: transparent;
      cursor: pointer;
    }

    p {
      padding: 1rem;
    }
  }

  .play-control {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .track {
    width: 100%;
    height: 1rem;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;

    .animate-track {
      background: rgb(204, 204, 204);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      padding: 1rem;
      pointer-events: none;
    }
  }

  svg {
    cursor: pointer;
  }

  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
  }
  input[type="range"]::-moz-range-thumb {
    height: 16px;
    width: 16px;
    border: none;
  }
`;

const Player = ({
  libraryHidden,
  currentSong,
  setCurrentSong,
  setSongs,
  songs,
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
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

  const songSelectHandler = async (selectedSong) => {
    await setCurrentSong(selectedSong);
    // add active state
    const newSongs = songs.map((s) => {
      if (s === selectedSong) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  const nextSongHandler = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    songSelectHandler(songs[nextIndex]);
  };

  const prevSongHandler = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    songSelectHandler(songs[prevIndex]);
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent * 100) / roundedDuration
    );
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
    if (e.target.pause && isPlaying) {
      audioRef.current.play();
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const readableDuration = (seconds) => {
    let sec = Math.floor(seconds);
    let min = Math.floor(sec / 60);
    if (!sec) return "00:00";
    min = min >= 10 ? min : "0" + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : "0" + sec;
    return min + ":" + sec;
  };

  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <PlayerStyle>
      <div className="time-control">
        <p>{readableDuration(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div className="animate-track" style={trackAnimation}></div>
        </div>

        <p>{readableDuration(songInfo.duration)}</p>
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
          icon={isPlaying ? faPause : faPlay}
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
        onLoadedMetadata={timeUpdateHandler}
        onEnded={nextSongHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
      <Library
        libraryHidden={libraryHidden}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        songSelectHandler={songSelectHandler}
      />
    </PlayerStyle>
  );
};

export default Player;
