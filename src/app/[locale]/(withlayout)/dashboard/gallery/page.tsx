import Page from '@/components/pages/dashboard/gallery';
import useAuth from '@/hooks/useAuth';
import Axios from '@/services/axiosServer';
import URLS from '@/services/urls';
import { post } from '@/types/post';

const Index = async () => {
  const data: { data: { results: post[] } } = await Axios.get(
    URLS.gallery.get_posts
  );

  return <Page data={data.data.results} />;
};

export default Index;
