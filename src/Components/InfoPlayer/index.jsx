const InfoPlayer = () => {
  return (
    <section className="song-description">
      <p className="song-title">El Jardinero</p>
      <p className="song-artist">Wilfredo Vargas</p>
      <div className="song-progress">
        <div className="progress-bar">
          <span></span>
        </div>
        <div className="song-status song-init">2:35</div>
        <div className="song-status song-end">3:35</div>
      </div>
    </section>
  );
};

export { InfoPlayer };
