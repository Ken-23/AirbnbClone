"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Navigation/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  actionLabel?: string;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  disable?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  actionLabel,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  disable,
  secondaryAction,
  secondaryLabel,
}) => {
  if (!isOpen) return null;

  const [showModal, setShowModal] = useState(false);

  const handleCloseFunction = useCallback(() => {
    if (disable) return;

    setShowModal(false);
    setTimeout(() => onClose(), 300);
  }, [disable, onClose]);

  const handleSubmit = useCallback(() => {
    if (disable) return;

    onSubmit();
  }, [disable, onSubmit]);

  const handleSecondaryActions = useCallback(() => {
    if (disable || !secondaryAction) return;

    secondaryAction();
  }, [disable, secondaryAction]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="justify-center items-center flex z-50 outline-none focus:outline-none bg-neutral-800/70 fixed inset-0">
        <div className="w-full md:w-4/5 lg:w-3/6 xl:w-5/6 my-6 mx-auto h-full lg:h-auto md:h-auto">
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate h-full md:h-auto lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/** Header*/}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button
                  onClick={handleCloseFunction}
                  className="absolute p-1 border-0 hover:opacity-70 transition left-9"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              <div className="relative p-6 flex-auto">{body}</div>
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="flex flex-row items-center gap-4 w-full
                "
                >
                  {secondaryAction && secondaryLabel && (
                    <Button
                      outline
                      disabled={disable}
                      label={secondaryLabel}
                      onClick={secondaryAction}
                    />
                  )}
                  <Button
                    disabled={disable}
                    label={actionLabel || ""}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
