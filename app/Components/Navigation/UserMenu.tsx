"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuBar";
import useRegisterModal from "@/app/hooks/useRegisterModal";

export default function UserMenu() {
  const registerModal = useRegisterModal();
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((open) => !open);
  }, []);
  return (
    <div className="relative flex flex-row items-center gap-3">
      <div
        onClick={() => {}}
        className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
      >
        Airbnb Your Home
      </div>
      <div
        onClick={toggleOpen}
        className="flex items-center border-[1px] border-neutral-200 rounded-full p-4 md:py-1 md: px-2 gap-3"
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md  w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="SignUp" />
            </>
          </div>
        </div>
      )}
    </div>
  );
}
