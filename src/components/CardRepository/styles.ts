import styled from 'styled-components'

export const Container = styled.a`
  width: 80%;
  border-radius: 10px;
  min-height: 80px;
  margin: 0 0 40px 0;
  padding: 10px;

  text-decoration: none;
  color: #000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  -webkit-box-shadow: 0px 0px 7px 0px rgba(240, 216, 216, 1);
  -moz-box-shadow: 0px 0px 7px 0px rgba(240, 216, 216, 1);
  box-shadow: 0px 0px 7px 0px rgba(240, 216, 216, 1);
  transition: 0.5s;

  a {
    position: relative;

    svg {
      color: #000;
    }
  }

  &:hover {
    transform: translateX(20px);
  }
`

export const ContainerInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  strong {
    font-size: 30px;
  }
`
