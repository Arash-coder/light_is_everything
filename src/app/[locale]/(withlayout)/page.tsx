import HomePage from '@/components/pages/homePage';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { landingData } from '@/types/landing';

export default async function Home() {
  try {
    const data: { data: landingData } = await Axios.get(URLS.landing);

    return <HomePage data={data.data} />;
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
