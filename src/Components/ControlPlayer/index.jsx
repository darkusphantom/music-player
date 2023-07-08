import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from "react-icons/io5";
import "./ControlPlayer.css";
import { useEffect, useState, useRef, useCallback } from "react";

/**
 * ControlPlayer component for controlling audio playback.
 *
 * @param {object} props - The props object.
 * @param {object} props.audioRef - A reference to the audio element.
 *
 * @returns {JSX.Element} A React functional component that renders the audio controls.
 */
const ControlPlayer = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  songs,
  trackIndex,
  setTrackIndex,
  setCurrentSong,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  /**
   * A reference to the animation frame of the audio playback.
   *
   * @type {object}
   */
  const playAnimationRef = useRef();

  /**
   * A useCallback hook that repeats the animation frame of the audio playback and updates the progress bar.
   *
   * @returns {void}
   */
  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  /**
   * A useEffect hook that handles the audio playback.
   */
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  /**
   * A function that toggles the state of `isPlaying`.
   *
   * @returns {void}
   */
  const togglePause = () => setIsPlaying((prev) => !prev);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = songs.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentSong(songs[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentSong(songs[trackIndex - 1]);
    }
  };

  return (
    <footer className="buttons">
      <button className="btn previous" onClick={handlePrevious}>
        <IoPlaySkipBackSharp />
      </button>
      <button className="btn back" onClick={skipBackward}>
        <IoPlayBackSharp />
      </button>

      <button className="btn play" onClick={togglePause}>
        {!isPlaying ? <IoPlaySharp /> : <IoPauseSharp />}
      </button>

      <button className="btn forward" onClick={skipForward}>
        <IoPlayForwardSharp />
      </button>
      <button className="btn next" onClick={handleNext}>
        <IoPlaySkipForwardSharp />
      </button>
    </footer>
  );
};

export { ControlPlayer };
