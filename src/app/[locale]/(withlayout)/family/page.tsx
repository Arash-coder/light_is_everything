import Page from '@/components/pages/membersPage';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { usersResponse } from '@/types/members';

const Index = async () => {
  const data: { data: usersResponse } = await Axios.get(URLS.members(1, 12));

  return <Page data={data.data} />;
};

export default Index;
