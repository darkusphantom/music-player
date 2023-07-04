import { Card } from "../Card";

const CarouselCard = ({ data }) => {
  return (
    <div className="cards">
      <div className="container-cards">
        {data.map((card, i) => (
          <Card key={i} src={card.src} alt={card.alt} />
        ))}
      </div>
    </div>
  );
};

export { CarouselCard };
