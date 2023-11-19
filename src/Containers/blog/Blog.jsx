// src/components/Blog.js
import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { Article } from '../../components';

const articles = [
  {
    id: 1,
    title: 'Latest Article',
    subtitle: 'Subtitle or Author Name',
    content:
      'This is the content of the latest article. It can contain paragraphs, images, and more.',
    imageUrl: 'https://example.com/latest-article-image.jpg',
  },
  {
    id: 2,
    title: 'Previous Article 1',
    subtitle: 'Subtitle or Author Name',
    content:
      'This is the content of the first previous article. It can contain paragraphs, images, and more.',
    imageUrl: 'https://example.com/previous-article1-image.jpg',
  },
  {
    id: 3,
    title: 'Previous Article 2',
    subtitle: 'Subtitle or Author Name',
    content:
      'This is the content of the second previous article. It can contain paragraphs, images, and more.',
    imageUrl: 'https://example.com/previous-article2-image.jpg',
  },
  // Add more articles as needed
];

const Blog = () => {
  const latestArticle = articles[0];
  const previousArticles = articles.slice(1);

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      {/* Display the most recent article at the top */}
      <Article
        key={latestArticle.id}
        title={latestArticle.title}
        subtitle={latestArticle.subtitle}
        content={latestArticle.content}
        imageUrl={latestArticle.imageUrl}
      />

      {/* Display previous articles as cards */}
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {previousArticles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Article
              title={article.title}
              subtitle={article.subtitle}
              content={article.content}
              imageUrl={article.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
