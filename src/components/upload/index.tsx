import { InputHTMLAttributes } from 'react';
import Input from '@/components/input';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';

interface UploadInterface extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholderComponent?: JSX.Element;
}

const Upload = ({ label, placeholderComponent }: UploadInterface) => {
  return (
    <div className="relative flex flex-col">
      <Input
        id="profile-pic"
        className="absolute opacity-0  w-0 h-0 p-0"
        type="file"
        label={label}
      />
      <label
        htmlFor="profile-pic"
        className="cursor-pointer p-2 px-4 bg-neutral-200 grow rounded-xl flex flex-col items-center justify-center"
      >
        {placeholderComponent ? (
          placeholderComponent
        ) : (
          <>
            <MdOutlineAddPhotoAlternate
              size={80}
              className="fill-neutral-400"
            />
            <div className="text-neutral-400">افزودن فایل </div>
          </>
        )}
      </label>
    </div>
  );
};

export default Upload;
