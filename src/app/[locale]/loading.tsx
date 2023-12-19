import gif from '@/../public/assets/images/loading.gif';
import Image from 'next/image';

const Index = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-red-600">
      <Image src={gif} alt="gif" width={100} height={100} />
    </div>
  );
};

export default Index;
