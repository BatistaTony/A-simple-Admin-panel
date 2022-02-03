import styled from 'styled-components';
import { CustomButton } from '../../components/Table/styles';

export const CustomForm = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap:15px;
    padding-left:20%;
    padding-right:20%;
    margin-top: 20px;
  }

  .error_msg {
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    color: red;
    margin-top:10px;
    margin-bottom: 10px;
  }
`;


export const FormButton = styled(CustomButton)`
    height:40px;
    width:100%;
    font-size:1rem;
    margin-left:0;
`

