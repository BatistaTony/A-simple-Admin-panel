import styled from 'styled-components'


type ContainerProps = {
  isFullWidth?: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 50px;
  position: relative;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'initial')};
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  border: 2px solid #d0d0d0;
  box-sizing: border-box;
  border-radius: 4px;

  .label {
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;
    color: #555555;
    margin-bottom: 10px;
  }

  > input {
    width: 100%;
    height: 100%;
    color: black;
    background-color: white;
    border: solid 0.6px transparent;
    font: 400 100% Roboto;
    box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 0.1);
    padding: 0 29px;
    transition: all 0.5s;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    color: #150132;
    padding-left: 15px;

    :focus {
      outline: none;
    }

    ::placeholder {
      font-family: Manrope;
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      color: #d0d0d0;
    }

    &::-ms-reveal,
    &::-ms-clear {
      display: none;
    }
  }
`;
