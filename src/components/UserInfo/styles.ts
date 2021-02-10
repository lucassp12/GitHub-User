import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;

  -webkit-box-shadow: 0px 0px 7px 0px rgba(240, 216, 216, 1);
  -moz-box-shadow: 0px 0px 7px 0px rgba(240, 216, 216, 1);
  box-shadow: 0px 0px 7px 0px rgba(240, 216, 216, 1);

  p {
    padding: 10px;
  }
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid rgba(240, 216, 216, 1);
  img {
    width: 100px;
    border-radius: 50%;
    border: 3px solid rgba(240, 216, 216, 1);
    margin-right: 10px;
  }

`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  strong {
    font-size: 25px;
  }
  span {
    font-size: 15px;
  }
`

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-left: 2px;
    svg {
      margin-right: 2px;
    }
  }
`

export const ContainerInfosUser = styled.div`
display: flex;
align-items: center;
`;
