import React from 'react';
import { Modal } from 'antd';

interface CustomModalProps {
  children: React.ReactNode;
  visible: boolean;
  // eslint-disable-next-line no-unused-vars

  onCancel: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
  // eslint-disable-next-line no-unused-vars

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
