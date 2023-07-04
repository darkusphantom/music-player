import { Fragment } from "react";
import Icon from "../../assets/icons/Pokemon-48px.svg";

const HeaderPage = () => {
  return (
    <Fragment>
      <div className="title">
        <img src={Icon} alt="Pokemon" className="icon" width="50" />
        <p>Play Music!</p>
      </div>
    </Fragment>
  );
};

export { HeaderPage };
