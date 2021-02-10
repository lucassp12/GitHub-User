import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 100px;
  -webkit-box-shadow: 0px 9px 5px -4px rgba(240, 216, 216, 1);
  -moz-box-shadow: 0px 9px 5px -4px rgba(240, 216, 216, 1);
  box-shadow: 0px 9px 5px -4px rgba(240, 216, 216, 1);

  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 250px;
  }

  div {
    input {
      border: none;
      width: 300px;
      border-radius: 15px;
      padding: 10px;

      border: 2px solid #000;
      margin-right: 15px;

      &:focus {
        border: 2px solid #ff0e05;
      }
    }

    button {
      padding: 9px;
      border-radius: 15px;
      border: none;

      color: #fff;
      background: #000;

      font-size: 16px;
      font-weight: bold;
      transition: 0.2s;
      border: 2px solid #000;

      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }
`
