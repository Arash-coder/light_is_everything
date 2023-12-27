import HomePage from '@/components/pages/homePage';
import { Fetch } from '@/services/config';
import URLS from '@/services/urls';
import { landingData } from '@/types/landing';

export default async function Home() {
  const data: landingData = await Fetch(URLS.landing);

  return <HomePage data={data} />;
}
