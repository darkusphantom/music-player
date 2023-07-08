import { HeaderPage } from "../Components/HeaderPage";
import { ControlPlayer } from "../Components/ControlPlayer";
import { PlayerLayout } from "../Layout/PlayerLayout";
import { DisplayTrack } from "../Components/DisplayTrack";
import { songs } from "../assets/data/songs-example";
import { ProgressBar } from "../Components/ProgressBar";
import "./style.css";

const MediaPlayer = () => {
  return (
    <main className="songplayer">
      <HeaderPage />
      <PlayerLayout>
        <DisplayTrack data={songs[0]} />
        <ProgressBar />
        <ControlPlayer />
      </PlayerLayout>
    </main>
  );
};

export { MediaPlayer };
