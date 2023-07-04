import { HeaderLayout } from "../Layout/HeaderLayout";
import { HeaderPage } from "../Components/HeaderPage";
import { PlayerLayout } from "../Layout/PlayerLayout";
import { FooterLayout } from "../Layout/FooterLayout";
import { ControlPlayer } from "../Components/ControlPlayer";
import { InfoPlayer } from "../Components/InfoPlayer";
import { CarouselCard } from "../Components/CarouselCard";

const songs = [
  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FFITgFxYmSUHtudlWtGK1nBv7HqI%3D%2Ffit-in%2F600x601%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-10694153-1502548270-7925.jpeg.jpg&f=1&nofb=1&ipt=b63507d612041bec36fe00ceb1f33ed675cd844f4c7ba19026096c932df801ee&ipo=images",
    alt: "El jardinero - Wilfredo Vargas.mp3",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02e83da6ef81402f30929f21cc",
    alt: "Wildfire OST - Honkai Star Rail",
  },
  {
    src: "https://i.scdn.co/image/ab67616d00001e02e6e663bf89c9e0b748100b77",
    alt: "Wildfire - Against The Current",
  },
];

const MediaPlayer = () => {
  return (
    <PlayerLayout>
      <HeaderLayout>
        <HeaderPage />
      </HeaderLayout>

      <CarouselCard data={songs} />
      <InfoPlayer />

      <FooterLayout>
        <ControlPlayer />
      </FooterLayout>
    </PlayerLayout>
  );
};

export { MediaPlayer };
