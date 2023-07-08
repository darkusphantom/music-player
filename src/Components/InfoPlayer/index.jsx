import { ProgressBar } from "../ProgressBar";

const InfoPlayer = () => {
  return (
    <div className="song-description">
      <p className="song-title">El Jardinero</p>
      <p className="song-artist">Wilfredo Vargas</p>
      <ProgressBar />
    </div>
  );
};

export { InfoPlayer };
