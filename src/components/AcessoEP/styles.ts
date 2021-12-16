import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  z-index: 9999;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateY(0);

  background: rgba(12, 12, 16, 0.8);

  .bg-videoo {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    video {
      width: 70%;
    }
  }
`;
