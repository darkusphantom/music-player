import { useRef, useState } from "react";
import { HeaderPage } from "../Components/HeaderPage";
import { ControlPlayer } from "../Components/ControlPlayer";
import { PlayerLayout } from "../Layout/PlayerLayout";
import { DisplayTrack } from "../Components/DisplayTrack";
import { songs } from "../data/songs-example";
import { ProgressBar } from "../Components/ProgressBar";

const MediaPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= songs.length - 1) {
      setTrackIndex(0);
      setCurrentSong(songs[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentSong(songs[trackIndex + 1]);
    }
  };

  return (
    <PlayerLayout>
      <HeaderPage />
      <DisplayTrack
        {...{
          currentSong,
          audioRef,
          setDuration,
          progressBarRef,
          handleNext,
        }}
      />
      <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
      <ControlPlayer
        {...{
          audioRef,
          progressBarRef,
          duration,
          setTimeProgress,
          songs,
          trackIndex,
          setTrackIndex,
          setCurrentSong,
          handleNext,
        }}
      />
    </PlayerLayout>
  );
};

export { MediaPlayer };
