import { TextareaHTMLAttributes } from 'react';

interface InputAreaInterface
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const InputArea = ({ label, ...inputProps }: InputAreaInterface) => {
  return (
    <>
      <label>{label}</label>
      <textarea
        {...inputProps}
        className={`outline-none border-none p-2 px-4 bg-neutral-200 rounded-lg w-full ${inputProps.className}`}
      />
    </>
  );
};

export default InputArea;
