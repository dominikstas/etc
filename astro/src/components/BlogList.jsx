import React from "react";

const BlogList = ({ posts }) => {
  return (
    <ul className="blog-list">
      {posts.map((post) => (
        <li key={post.id} className="blog-item">
          <a href={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;

// Style w Astro lub CSS Modules
<style>
  .blog-list {
    list-style: none;
    padding: 0;
  }

  .blog-item {
    margin-bottom: 1.5rem;
  }

  .blog-item h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  .blog-item p {
    color: #777;
    margin: 0.5rem 0 0;
  }

  .blog-item a {
    text-decoration: none;
    color: #000;
    transition: color 0.3s;
  }

  .blog-item a:hover {
    color: #007acc;
  }
</style>
