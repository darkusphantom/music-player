const Card = ({ src, alt }) => {
  return (
    <div className="song">
      <img src={src} alt={alt} width="240" height="240" />
    </div>
  );
};

export { Card };
