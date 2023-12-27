import HomePage from '@/components/pages/homePage';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { landingData } from '@/types/landing';

export default function Home() {
  // const data: { data: landingData } =  Axios.get(URLS.landing);

  Axios.get(URLS.landing)
    .then((res) => {
      console.log('res.data', res.data);
    })
    .catch((err) => {
      console.log('err', err);
      console.log('err', err.message);
    });

  // console.log('arash', data);

  // return <HomePage data={data.data} />;

  return (
    <>
      <div>hello test</div>
    </>
  );
}
