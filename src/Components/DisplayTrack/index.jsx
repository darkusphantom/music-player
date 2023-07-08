import "./DisplayTrack.css";

const DisplayTrack = ({ data }) => {
  return (
    <div className="tracks">
      <div className="track-image">
        <img src={data.src} alt={data.name} width="240" height="240" />
      </div>
      <div className="track-description">
        <p className="track-title">El Jardinero</p>
        <p className="track-artist">Wilfredo Vargas</p>
      </div>
    </div>
  );
};

export { DisplayTrack };
