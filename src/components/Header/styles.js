import styled from 'styled-components';

export const Container = styled.div`
  height: 92px;
  background: #111;
  padding: 0 60px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 950px;

  nav img {
    height: 32px;
    width: 31px;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    text-align: end;

    strong {
      color: #fff;
      font-size: 14px;
      margin-bottom: 5px;
    }

    a {
      color: #fff;
      opacity: 0.5;
      font-size: 12px;

      &:hover {
        opacity: 1;
      }
    }
  }

  button {
    border: 0;
    border-radius: 4px;
    background: #d44059;
    color: #fff;
    font-weight: bold;
    width: 71px;
  }
`;
