import { useState } from "react";
import { formatTime } from "../../utils/time";
// import { WaveIcon } from "../.././assets/icons/wave.svg";
import "./ProgressBar.css";

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const [isPlay, setIsPlay] = useState(false);
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    setIsPlay(!isPlay);
  };

  const formatTimeProgress = formatTime(timeProgress);
  const formatDuration = formatTime(duration);

  return (
    <div
      className="song-progress wave"
      style={
        !isPlay
          ? { animationPlayState: "pause" }
          : { animationPlayState: "play" }
      }
    >
      <div className="time current">{formatTimeProgress}</div>
      <input
        className="progress-bar"
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <div className="time">{formatDuration}</div>
    </div>
  );
};

export { ProgressBar };
