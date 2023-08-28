"use client";
import React from "react";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  errors,
  register,
  formatPrice,
  required,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          className="text-neutral-700 absolute top-5 left-2"
          size={24}
        />
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={label}
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none disabled:opacity-70 disabled:cursor-not-allowed ${
          formatPrice ? "pl-9" : "pl-4"
        } ${errors && errors[id] ? "border-rose-500" : "border-neutral-300"} ${
          errors && errors[id]
            ? "focus:border-rose-500"
            : "focus:border-neutral-300"
        }`}
      />
      <label
        className={`absolute text-md duration-150 transform -traslate-y-3 top-5 z-10 origin-[0] ${
          formatPrice ? "left-9" : "left-4"
        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4`}
      ></label>
    </div>
  );
};

export default Input;
