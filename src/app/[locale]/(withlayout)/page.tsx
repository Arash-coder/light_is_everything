import HomePage from '@/components/pages/homePage';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { landingData } from '@/types/landing';

export default async function Home() {
  const data: { data: landingData } = await Axios.get(URLS.landing);

  console.log('arash', data);

  // return <HomePage data={data.data} />;

  return (
    <>
      <div>hello test</div>
    </>
  );
}
