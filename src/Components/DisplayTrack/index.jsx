import { Track } from "../Track";

const DisplayTrack = ({ data }) => {
  return (
    <div className="cards">
      <div className="container-cards">
        {data.map((track, i) => (
          <Track key={i} src={track.src} alt={track.alt} />
        ))}
      </div>
    </div>
  );
};

export { DisplayTrack };
