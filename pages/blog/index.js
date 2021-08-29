import Head from 'next/head';
import Link from 'next/link';

import { getAllPosts } from '../../lib/api';

const formatDate = date => {
  const newDate = new Date(date);

  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`
};

const Blog = ({ allPosts: { edges } }) => {
  return (
    <div className="blog-page">
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className="">
        <h1 className="text-center">Latest blog articles</h1>
        <section className="articles">
          {edges.map(({ node }) => (
            <div className="article" key={node.id}>
              <div className="article-img-container">
                <figure>
                  <img
                    className="article-img"
                    src={node.extraPostInfo?.thumbImage?.mediaItemUrl}
                    alt={node.title}
                  />
                </figure>
              </div>
              <div className="">
                <Link href={`/blog/${node.slug}`}>
                  <h2 className="pointer primary-color">{node.title}</h2>
                </Link>
                <p className="primary-color">{formatDate(node.date)}</p>
                <p className="primary-color">{node.extraPostInfo?.authorExcerpt}</p>
                <Link href={`/blog/${node.slug}`}>
                  <a className="secondary-color">Read more</a>
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