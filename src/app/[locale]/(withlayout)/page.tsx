import HomePage from '@/components/pages/homePage';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { landingData } from '@/types/landing';
import axios from 'axios';

export default async function Home() {
  try {
    const data: { data: landingData } = await axios.get(
      'http://ight-backend-light_backend_web/landing/info'
    );

    console.log('data', data);
    console.log('data.data', data.data);

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
