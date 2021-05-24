import Head from 'next/head';
import Link from 'next/link';

import { getAllPosts } from '../../lib/api';

const Blog = ({ allPosts: { edges } }) => {
  return (
    <div className="">
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className="">
        <h1 className="">Latest blog articles</h1>
        <hr />
        <section>
          {edges.map(({ node }) => (
            <div className="" key={node.id}>
              <div className="">
                <figure>
                  <img
                    style={{ marginRight: 20 }}
                    src={node.extraPostInfo?.thumbImage?.mediaItemUrl}
                    alt={node.title}
                  />
                </figure>
              </div>
              <div className="">
                <h2>{node.title}</h2>
                <p>{node.extraPostInfo?.authorExcerpt}</p>
                <Link href={`/blog/${node.slug}`}>
                  <a>Read more</a>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
};

export default Blog

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts
    }
  };
}