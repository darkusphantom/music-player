import Icon from "../../assets/icons/Pokemon-48px.svg";

const HeaderPage = () => {
  return (
    <header className="header">
      <div className="title">
        <img src={Icon} alt="Pokemon" className="icon" width="50" />
        <p>Play Music!</p>
      </div>
    </header>
  );
};

export { HeaderPage };
