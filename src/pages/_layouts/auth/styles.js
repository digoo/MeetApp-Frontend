import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-150deg, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    height: 42px;
    width: 41px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    input {
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      margin: 0 0 10px;
      color: #fff;
      background: rgba(0, 0, 0, 0.4);

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 50px;
      border: 0;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }
    }
  }

  h1 {
    color: red;
    -webkit-animation: flash linear 1s infinite;
    animation: flash linear 1s infinite;
    margin-bottom: 20px;

    @-webkit-keyframes flash {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.1;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes flash {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.1;
      }
      100% {
        opacity: 1;
      }
    }
  }

  h1 + a {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;
