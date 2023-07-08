import { formatTime } from "../../utils/time";
import "./ProgressBar.css";

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTimeProgress = formatTime(timeProgress);
  const formatDuration = formatTime(duration);

  return (
    <div className="song-progress">
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
