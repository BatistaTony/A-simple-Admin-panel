import React from 'react';
import { Modal } from 'antd';

interface CustomModalProps {
  children: React.ReactNode;
  visible: boolean;
  onCancel: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
  onOkClick: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
  title: string;
}

const CustomModal = ({ children, onCancel, onOkClick, visible, title }: CustomModalProps)=> {
  return (
    <Modal visible={visible} onCancel={onCancel} onOk={onOkClick} title={title}>
      {children}
    </Modal>
  );
}

export default CustomModal;
