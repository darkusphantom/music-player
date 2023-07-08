import { HeaderPage } from "../Components/HeaderPage";
import { ControlPlayer } from "../Components/ControlPlayer";
import { InfoPlayer } from "../Components/InfoPlayer";
import { PlayerLayout } from "../Layout/PlayerLayout";
import { DisplayTrack } from "../Components/DisplayTrack";
import { songs } from "../assets/data/songs-example";

const MediaPlayer = () => {
  return (
    <main className="songplayer">
      <HeaderPage />
      <PlayerLayout>
        <DisplayTrack data={songs} />
        <InfoPlayer />
        <ControlPlayer />
      </PlayerLayout>
    </main>
  );
};

export { MediaPlayer };
