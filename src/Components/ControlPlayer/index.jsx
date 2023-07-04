import { Fragment } from "react";
import SkipToStartIcon from "../../assets/icons/skip-to-start-48.svg";
import RewindIcon from "../../assets/icons/Rewind-48px.svg";
import PlayIcon from "../../assets/icons/Play-48px.svg";

const ControlPlayer = () => {
  return (
    <Fragment>
      <div className="btn previus">
        <img src={SkipToStartIcon} alt="previous" width="32" />
      </div>
      <div className="btn back">
        <img src={RewindIcon} alt="rewind" width="32" />
      </div>
      <div className="btn play">
        <img src={PlayIcon} alt="play/pause" width="50" />
      </div>
      <div className="btn forward">
        <img src={RewindIcon} alt="forward" width="32" />
      </div>
      <div className="btn next">
        <img src={SkipToStartIcon} alt="next" width="32" />
      </div>
    </Fragment>
  );
};

export { ControlPlayer };
