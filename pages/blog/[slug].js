import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import { getAllPostsWithSlug, getPost } from '../../lib/api';

export default function Post({ postData }) {
  const router = useRouter();

  if (!router.isFallback && !postData?.slug) {
    return <p>hmm...looks like an error</p>;
  }

  const formatDate = date => {
    const newDate = new Date(date);

    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`
  };

  const cleanExcerpt = excerpt => excerpt?.slice(3, 120);

  return (
    <div className="article-container">
      <Head>
        <title>{postData?.title}</title>
        <link rel='icon' href='/facivon.ico' />

        <meta charSet="UTF-8" />
        <meta name="description" content={cleanExcerpt(postData?.excerpt || "Psicologia, Educación, Budismo, Auto Compasion, Amor, Aceptacion")} />
        <meta name="keywords" content="Psicologia, Educación, Budismo, Auto Compasion, Amor, Aceptacion" />
        <meta name="author" content="Ladybeth González Cortés" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="article">
        {router.isFallback ? (
          <h2>Loading...</h2>
        ) : (
          <article className="m-20">
            <div>
              <h1>{postData.title}</h1>
              <p>{formatDate(postData.date)}</p>
            </div>
            <div 
              className='post-content content'
              dangerouslySetInnerHTML={{ __html: postData?.content }}
            />
          </article>
        )}
        <p>
          <Link href='/blog'>
            back to articles
          </Link>
        </p>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const data = await getPost(params.slug);
  return {
    props: {
      postData: data.post
    }
  };
}