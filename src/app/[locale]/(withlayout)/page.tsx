import HomePage from '@/components/pages/homePage';
import Fetch from '@/services/configFetch';
import URLS from '@/services/urls';
import { landingData } from '@/types/landing';

export default async function Home() {
  const data: landingData = await Fetch(URLS.landing);

  return <HomePage data={data} />;
}
