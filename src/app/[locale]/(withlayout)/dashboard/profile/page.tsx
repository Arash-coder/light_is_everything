import Page from '@/components/pages/dashboard/index';
import useAuth from '@/hooks/useAuth';
import Axios from '@/services/axiosServer';
import URLS from '@/services/urls';
import { member } from '@/types/members';

const Index = async () => {
  // const isLogin = useAuth();
  const data: { data: member } = await Axios.get(URLS.auth.me);

  return <Page data={data.data} />;
};

export default Index;
