import Page from '@/components/pages/userProfilePage';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { userProfile } from '@/types/user';

const Index = async ({
  params: { username }
}: {
  params: { username: string };
}) => {
  const data: { data: userProfile } = await Axios.get(
    URLS.userprofile(username)
  );

  return <Page data={data.data} />;
};

export default Index;
