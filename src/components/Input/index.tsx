import React, { ChangeEventHandler,  useRef } from 'react';
import { Container } from './styles';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  // if its true then it will be width of 100%
  fullWidth?: boolean;
  error?: boolean;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const CustomInput: React.FC<InputProps> = ({ value, fullWidth, label, ...props }) => {
  return (
    <Container isFullWidth={fullWidth}>
      <h1 className="label">{label}</h1>
      <input value={value} onChange={props.onChange} {...props} />
    </Container>
  );
};


export default CustomInput