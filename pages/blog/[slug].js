import {useRouter} from  'next/router';

import Head from 'next/head'
const Post = () => {
  const router = useRouter();
  const {slug} = router.query;

  return (
    <> 
      <h1>Post: {slug}</h1>
    </>
  );
}


export default Post;