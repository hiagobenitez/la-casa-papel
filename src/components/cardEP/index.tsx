import React, { useState } from 'react';
import { EPComponent } from '../AcessoEP';
import { Container } from './styles';
import 'animate.css';

type cardEpProps = {
  url: string;
  ep: string;
  title: string;
  tempo: string;
  videoo: string;
};

export const CardEp = ({ url, ep, videoo, title, tempo }: cardEpProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Container url={url} isActive={isActive}>
        {!isActive && (
          <div className="card" onClick={() => setIsActive(!isActive)}>
            {/*  */}
            <div className="footerr">
              <h1>{ep}</h1>
              <div className="filho">
                <p>{title}</p>
                <h2>{tempo}</h2>
              </div>
            </div>

            <div className="autoplay">
              <img src="./images/playerEP.svg" alt="" />
            </div>
          </div>
        )}
        {isActive && <EPComponent video={videoo} setIsActive={setIsActive} />}
      </Container>
    </>
  );
};
