import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}
interface ContainerProps {
  url: string;
}
export const Container = styled.section<ContainerProps>`
  .card {
    width: 18.1rem;
    height: 11.613rem;
    border: 1px solid #545454;

    cursor: pointer;
    position: relative;

    transition: 0.7s ease;

    object-fit: cover;

    background-image: url(${props => props.url});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;

    h1 {
      font-family: Mukta;
      font-weight: 300;
      font-size: 15px;
      /* or 32px */

      color: #e4e4e4;
    }
    .footerr {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      flex-direction: column;
      padding: 0 2rem;

      .filho {
        margin-bottom: 1rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      p {
        font-family: Mukta;
        font-size: 18px;

        color: #ffffff;
      }
      h2 {
        font-family: Mukta;
        font-weight: 300;
        font-size: 12px;

        color: #c4c4c4;
      }
    }
    .autoplay {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 45px;
        height: 45px;

        transition: 0.7s ease;
      }
    }
    &:hover {
      border: 1px solid #ffffff;
      filter: brightness(1.5);
      img {
        transform: scale(1.4);
      }
    }
  }
`;
