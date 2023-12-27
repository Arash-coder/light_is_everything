import { InputHTMLAttributes } from 'react';

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...inputProps }: InputInterface) => {
  return (
    <>
      <label className="">{label}</label>
      <input
        {...inputProps}
        className={`outline-none border-none p-2 px-4 bg-neutral-200 rounded-lg w-full ${inputProps.className}`}
      />
    </>
  );
};

export default Input;
