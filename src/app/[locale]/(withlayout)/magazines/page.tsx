import Page from '@/components/pages/magazinesPage';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { magazinesResponse } from '@/types/magazines';

const Index = async () => {
  const data: { data: magazinesResponse } = await Axios.get(
    URLS.magazines(1, 12)
  );

  return <Page data={data.data} />;
};

export default Index;
