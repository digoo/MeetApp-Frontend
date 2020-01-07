import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    flex: 1;
    max-width: 950px;

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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 50px;
      width: 120px;
      align-self: flex-end;
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
  }
`;
