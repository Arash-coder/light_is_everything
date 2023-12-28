'use client';

import { InputHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  errorMessage?: string;
}

const Input = ({
  label,
  error,
  errorMessage,
  ...inputProps
}: InputInterface) => {
  return (
    <>
      <div className="relative flex items-center">
        <label className="">{label}</label>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={error && { opacity: 1, x: 0 }}
          className="text-error mr-3 text-sm"
        >
          {errorMessage}
        </motion.p>
      </div>
      <input
        {...inputProps}
        className={`outline-none border-none p-2 px-4 bg-neutral-200 rounded-lg w-full ${inputProps.className}`}
      />
    </>
  );
};

export default Input;
