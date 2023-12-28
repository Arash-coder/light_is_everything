import Page from '@/components/pages/dashboard/gallery';
import useAuth from '@/hooks/useAuth';
import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { post } from '@/types/post';

const Index = async () => {
  const isLogin = useAuth();
  const data: { data: { results: post[] } } = await Axios.get(
    URLS.gallery.get_posts,
    {
      headers: {
        Authorization: `Bearer ${isLogin.token}`
      }
    }
  );

  return <Page data={data.data.results} />;
};

export default Index;
