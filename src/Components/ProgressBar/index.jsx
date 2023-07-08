import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <div className="song-progress">
      <div className="progress-bar">
        <span></span>
      </div>
      <div className="song-status song-init">2:35</div>
      <div className="song-status song-end">3:35</div>
    </div>
  );
};

export { ProgressBar };
