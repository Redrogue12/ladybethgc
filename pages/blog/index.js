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
        <title>Artículos - Ladybeth González-Cortés, LCC</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className="main-container">
          <h1 className="text-center">Artículos</h1>
          <section className="articles">
            {edges.map(({ node }) => (
              <div className="blog-article" key={node.id}>
                <div>
                  <Link href={`/blog/${node.slug}`}>
                    <h2 className="pointer primary-color article-title">{node.title}</h2>
                  </Link>
                  <p className="primary-color article-date">{formatDate(node.date)}</p>
                  <div className="article-img-container">
                    <figure>
                      {node.extraPostInfo?.thumbImage?.mediaItemUrl ? (
                        <img
                          className="article-img"
                          src={node.extraPostInfo?.thumbImage?.mediaItemUrl}
                          alt={node.title}
                        />
                        ) : null
                      }
                    </figure>
                  </div>
                  <p className="primary-color article-excerpt">{node.extraPostInfo?.authorExcerpt}</p>
                  <Link href={`/blog/${node.slug}`}>
                    <span className="secondary-color">Leer Artículo</span>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </div>
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