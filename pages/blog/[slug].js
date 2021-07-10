import {useRouter} from  'next/router';
import Layout from '../../components/layout'
import Link from 'next/link'
import Head from 'next/head'
const Post = () => {
  const router = useRouter();
  const {slug} = router.query;

  return (
    <> 
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Post: {slug}</h1>
      
    </Layout>
    
    </>
  );
}


export default Post;