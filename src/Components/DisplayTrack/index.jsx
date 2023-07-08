import "./DisplayTrack.css";

const DisplayTrack = ({
  currentSong,
  audioRef,
  progressBarRef,
  setDuration,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div className="tracks">
      <audio
        src={currentSong.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="track-image">
        <img
          src={currentSong.thumbnail}
          alt={`${currentSong.title} - ${currentSong.author}`}
          width="240"
          height="240"
        />
      </div>
      <div className="track-description">
        <p className="track-title">{currentSong.title}</p>
        <p className="track-artist">{currentSong.author}</p>
      </div>
    </div>
  );
};

export { DisplayTrack };
