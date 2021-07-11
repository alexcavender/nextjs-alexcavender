// import {useRouter} from  'next/router';
import Layout from '../../components/layout'
import Link from 'next/link'
import Head from 'next/head'
const Post = ({title, body}) => (
  <> 
  <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h1>{title}</h1>
    <p>{body}</p>
  </Layout>
  
  </>
);


Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.slug}`
  );
  const post = await res.json();

  return post;
}
export default Post;