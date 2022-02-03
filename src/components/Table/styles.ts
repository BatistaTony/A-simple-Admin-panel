import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #e8e5ce;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: white;
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 3% 15% 10% 20% 15% auto auto;
`;

export const TableHeaderData = styled.h1`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #150132;
  padding-left: 20px;
`;

export const TableRow = styled(TableHeader)`
  border-top: 1px solid #e8e5ce;
`;

export const TableRowData = styled(TableHeaderData)`
  font-weight: normal;
  font-size: 1.1rem;
  color: #150132;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
`;

interface CustomButtonProps {
  bg?: string;
}

export const CustomButton = styled(ButtonStyled)<CustomButtonProps>`
  background-color: ${({ bg }) => (bg ? bg : 'blue')};
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #ffffff;
  width:70%;
`;
