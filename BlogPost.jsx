import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ title, content }) => (
  <article>
    <h2>{title}</h2>
    <p>{content}</p>
  </article>
);

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BlogPost;
