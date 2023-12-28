import HomePage from '@/components/pages/homePage';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { landingData } from '@/types/landing';

export default async function Home() {
  try {
    // const data: { data: landingData } = await Axios.get(URLS.landing);

    const res = await fetch('https://api.lightiseverything.ir/landing/info');

    const data = await res.json();

    console.log('data', data);
    console.log('data.data', data.data);

    return <HomePage data={data} />;
  } catch (error: any) {
    console.log('err', error);
    console.log('err2', error.message);
    return (
      <>
        <div>error</div>
      </>
    );
  }
}
