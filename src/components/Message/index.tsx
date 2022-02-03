import React from 'react';
import { MessageContainer } from './styles';

interface CustomMessageProps {
  children: React.ReactNode;
}

const CustomMessage = ({ children }: CustomMessageProps) => {
  return <MessageContainer>{children}</MessageContainer>;
};

export default CustomMessage;
