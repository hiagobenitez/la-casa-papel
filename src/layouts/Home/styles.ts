import theme from '@/styles/theme';
import styled from 'styled-components';

export const Animation = styled.section`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;

  z-index: 999;
  .bg-loader {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;

    background: linear-gradient(255deg, #ea1d22 0%, #b31317 100%);

    .logovrau {
      fill: transparent;

      animation: logoman 12s ease infinite alternate;
    }
    @keyframes logoman {
      0% {
        strokewidth: 0;
        stroke-dasharray: 1 100;
        fill: transparent;
      }
      25% {
        strokewidth: 1;
        stroke-dasharray: 100 0;

        fill: transparent;
      }
      60%,
      100% {
        fill: #fff;

        strokewidth: 0.3;
      }
    }
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  background: #0c0c10;
`;

export const BgVideo = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;s

  z-index: -2;
  position: absolute;
  top: 0;

  top: 0;
  left: 0;
  
  @media screen and (max-width: 1286px) {
    display: none;
  }
  video {
    width: 100%;
    height: 100%;
  }
  .bg-video {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%s;
    
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
    
        background: linear-gradient(
          90deg,
          #0b0c10 23.96%,
          rgba(11, 12, 16, 0.8) 54.09%,
          #0c0c10 77.6%
        );
      }
  }
`;

export const Content = styled.section`
  max-width: 80%;
  height: 100vh;
  margin: 0 auto;
  @media screen and (max-width: 1180px) {
    height: 100%;
  }

  .navbar {
    width: 100%;
    height: 15vh;

    z-index: 1;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1600px) {
      height: 12vh;
    }
    @media screen and (max-width: 960px) {
    }
    @media screen and (max-width: 960px) {
    }

    .nav-menu {
      display: flex;
      align-items: center;
      gap: 3rem;

      .logo {
        width: 55px;
        height: 67px;
      }
      .nav-link {
        display: inline-block;

        padding: 2px 16px;

        font-family: Mukta;
        font-size: 0.9rem;
        line-height: 1.875rem;
        letter-spacing: 2px;

        color: ${({ theme }) => theme.colors.cinzaclaro};
        margin: 1.2rem;

        transition: color 0.7s ease;

        @media screen and (max-width: 1180px) {
          margin: 0.4rem;
          font-size: 0.8rem;
        }
        position: relative;

        &::after {
          content: ' ';
          display: block;
          position: absolute;
          top: -60px;
          left: 50%;

          width: 2px;
          height: 0px;

          transition: height 0.7s ease;

          background: linear-gradient(
            180deg,
            rgba(222, 16, 25, 0) 0%,
            #de1019 100%
          );
          border-radius: 8px;
        }

        &:hover {
          color: #fff;

          &::after {
            height: 60px;
          }
        }
      }

      .nav-list {
        @media screen and (max-width: 960px) {
          display: none;
        }
      }

      .nav-link-name {
        display: inline-block;

        position: relative;
        padding: 2px 16px;

        letter-spacing: 2px;

        font-family: Mukta;
        font-weight: 200;
        font-size: 1rem;
        line-height: 1.875rem;
        font-style: italic;

        margin: 1.2rem;

        @media screen and (max-width: 1180px) {
          margin: 0.4rem;
          font-size: 0.8rem;
        }

        color: ${({ theme }) => theme.colors.red};

        &::after {
          content: ' ';
          display: block;
          position: absolute;
          top: -60px;
          left: 50%;

          width: 2px;
          height: 0px;

          transition: height 0.7s ease;

          background: linear-gradient(
            180deg,
            rgba(222, 16, 25, 0) 0%,
            #de1019 100%
          );
          border-radius: 8px;
        }

        &:hover {
          &::after {
            height: 60px;
          }
        }
      }
    }

    .nav-social {
      display: flex;
      align-items: center;
      gap: 2rem;

      .IconSearch {
        cursor: pointer;

        stroke: #959698;
        transition: 0.7s ease;

        &:hover {
          stroke: #fff;
          transform: scale(1.15);
        }
      }

      .notify {
        cursor: pointer;
        transition: 0.7s ease;
        .pathcolor {
          transition: 0.7s ease;

          fill: #959698;
        }

        circle {
          fill: #de1019;
        }

        &:hover {
          transform: scale(1.15);
          .pathcolor {
            fill: #fff;
          }
          circle {
            filter: brightness(1.5);
          }
        }
      }
      .btn-terciary {
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: Mukta;
        font-size: 18px;
        line-height: 30px;

        transform: skewX(-10deg);

        padding: 3px 25px;

        text-transform: uppercase;

        color: #ffffff;

        background: #de1019;
        border-radius: 3px;

        transition: 0.7s ease;

        &:hover {
          filter: brightness(1.5);
        }
      }
    }
  }

  /* -------------- SECTION CONTAINER --------- */
  .container {
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 1180px) {
      flex-direction: column-reverse;
    }

    .container-item-2 {
      z-index: -1;

      width: 100%;
      height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;

      .Tilt-inner {
        display: flex;
        align-items: center;

        justify-content: center;
        width: 100%;
        height: 100%;

        img {
          margin-top: 7rem;
          width: 100%;

          @media screen and (max-width: 1600px) {
            width: 90%;
          }
          @media screen and (max-width: 1181px) {
            width: 80%;
          }
          @media screen and (max-width: 960px) {
            width: 100%;
          }
        }
      }
    }

    .container-item-1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 50%;
      height: 100%;

      @media screen and (max-width: 1180px) {
        width: 100%;
      }
      .logo-series {
        margin-top: 3rem;
        display: flex;
        align-items: center;
        gap: 1.1rem;

        font-family: Mukta;
        font-style: normal;
        font-weight: 300;

        font-size: 1.245rem;
        line-height: 139.4%;
        letter-spacing: 0.15em;
        text-transform: uppercase;

        color: #ffffff;

        @media screen and (max-width: 1600px) {
          width: 100px;
          font-size: 1.145rem;
          margin-top: 1rem;
        }
        @media screen and (max-width: 960px) {
          width: 80px;
          font-size: 1rem;
          margin-top: 0.7rem;
        }
        @media screen and (max-width: 960px) {
          font-size: 0.9rem;
          margin-top: 0.4rem;
        }
      }
      .logolacasa {
        margin-top: 2rem;
        @media screen and (max-width: 1600px) {
          width: 20rem;
        }
        @media screen and (max-width: 960px) {
          width: 18rem;
        }
        @media screen and (max-width: 960px) {
          width: 16rem;
        }
      }
      .revealing {
        margin-top: 0.5rem;

        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 0.9rem;
        line-height: 200%;

        color: #959698;

        span {
          font-weight: 600;

          color: ${({ theme }) => theme.colors.green};
        }
      }
      .title {
        margin-top: 1.5rem;

        font-family: Mukta;
        font-style: normal;
        font-weight: 500;
        font-size: 1.465rem;
        line-height: 150%;

        color: #ffffff;
      }
      .sub-title {
        margin-top: 0.3rem;

        max-width: 500px;

        font-family: Mukta;
        font-style: normal;
        font-weight: normal;
        font-size: 1.025rem;
        line-height: 150%;

        text-align: justify;

        color: #c4c4c4;

        @media screen and (max-width: 1600px) {
          font-size: 0.925rem;
        }
        @media screen and (max-width: 960px) {
          font-size: 0.825rem;
        }
        @media screen and (max-width: 960px) {
          font-size: 0.725rem;
        }
      }
      .buttons {
        display: flex;
        align-items: center;
        margin-top: 2rem;
        margin-left: 1rem;

        gap: 2rem;

        .btn {
          transition: 0.7s ease;

          display: inline-block;
          padding: 12px 46px;
          border-radius: 3px;

          transform: skewX(-10deg);

          background: ${({ theme }) => theme.colors.red};

          position: relative;

          &::after {
            content: ' ';
            display: block;
            position: absolute;
            top: -2px;
            opacity: 0;
            left: -2px;
            width: 30%;
            height: 70%;
            border-radius: 3px;
            transition: 0.7s ease;

            border-top: 3px solid #fff;
            border-left: 3px solid #fff;
          }
          &::before {
            content: ' ';
            display: block;
            position: absolute;
            bottom: -2px;
            right: -2px;
            transition: 0.7s ease;
            opacity: 0;

            width: 30%;
            height: 70%;
            border-radius: 3px;

            border-bottom: 3px solid #fff;
            border-right: 3px solid #fff;
          }

          &:hover {
            transform: skewX(-10deg) scale(1.05);
            &::after {
              opacity: 1;
            }
            &::before {
              opacity: 1;
            }
          }
          p {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-family: Mukta;
            font-style: normal;
            font-weight: normal;
            font-size: 1rem;
            line-height: 30px;
            text-transform: uppercase;
            color: #fff;

            @media screen and (max-width: 1600px) {
              font-size: 0.9rem;
            }
            @media screen and (max-width: 960px) {
              font-size: 0.8rem;
            }
            @media screen and (max-width: 960px) {
              font-size: 0.7rem;
            }
          }
        }

        .btn-secondary {
          display: inline-block;
          padding: 10px 44px;
          border-radius: 3px;
          background: transparent;

          transform: skewX(-10deg);
          z-index: 1;

          transition: 0.7s ease;

          position: relative;

          border: 2px solid #de1019;

          &::after {
            content: ' ';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -2;
            transition: 0.7s ease;

            width: 0%;
            height: 100%;
            background: ${({ theme }) => theme.colors.red};
          }
          &:hover {
            &::after {
              width: 100%;
            }
          }
          p {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-family: Mukta;
            font-style: normal;
            font-weight: normal;
            font-size: 1rem;
            line-height: 30px;
            text-transform: uppercase;
            color: #fff;
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    margin-top: 2rem;
    /* height: 37vh; */
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;

    .Episodes {
      font-family: Mukta;
      font-size: 1.5rem;
      line-height: 200%;

      text-align: justify;

      color: #ffffff;
      span {
        font-weight: 300;
        font-size: 18px;
        line-height: 200%;
        /* or 36px */

        text-align: justify;

        color: #ffffff;
      }
    }

    .aquiii {
      display: flex;
      width: 100%;
      gap: 2rem;
      @media screen and (max-width: 1180px) {
        flex-wrap: wrap;
      }
    }
    .cards {
      max-width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      gap: 2rem;
    }

    img {
      width: 100%;
    }
  }
`;
