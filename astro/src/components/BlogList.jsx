import React from "react";

const BlogList = ({ posts }) => {
  const styles = {
    blogList: {
      listStyleType: 'none',
      padding: 0
    },
    blogItem: {
      marginBottom: '1.5rem'
    },
    blogItemTitle: {
      fontSize: '1.5rem',
      margin: 0
    },
    blogItemExcerpt: {
      color: '#777',
      margin: '0.5rem 0 0'
    },
    blogItemLink: {
      textDecoration: 'none',
      color: '#000',
      transition: 'color 0.3s'
    },
    blogItemLinkHover: {
      color: '#007acc'
    }
  };

  return (
    <ul style={styles.blogList}>
      {posts.map((post) => (
        <li key={post.id} style={styles.blogItem}>
          <a 
            href={post.slug} 
            style={styles.blogItemLink}
            onMouseEnter={(e) => e.target.style.color = styles.blogItemLinkHover.color}
            onMouseLeave={(e) => e.target.style.color = styles.blogItemLink.color}
          >
            <h2 style={styles.blogItemTitle}>{post.title}</h2>
            <p style={styles.blogItemExcerpt}>{post.excerpt}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
