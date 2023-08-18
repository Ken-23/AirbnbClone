import React from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  body?: React.ReactNode;
  footer: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,

  footer,
}) => {
  return <div>modal</div>;
};
