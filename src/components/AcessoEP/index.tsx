import React from 'react';
import { Container } from './styles';
import { SetStateAction } from 'react';
import 'animate.css';
type MenuDesktopProps = {
  setIsActive: React.Dispatch<SetStateAction<boolean>>;
  video: string;
};

export const EPComponent = ({ setIsActive, video }: MenuDesktopProps) => {
  return (
    <Container onClick={() => setIsActive(false)}>
      <section className="bg-videoo animate__animated animate__zoomIn">
        <video autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
      </section>
    </Container>
  );
};
