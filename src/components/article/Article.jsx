import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import GetAppIcon from '@mui/icons-material/GetApp';

const Article = () => {
  return (
    <Card>
      {/* Article Header */}
      <CardMedia
        component="img"
        height="200"
        image="https://example.com/article-image.jpg"
        alt="Article Image"
      />

      <CardContent>
        {/* Article Title */}
        <Typography variant="h4" gutterBottom>
          Article Title
        </Typography>

        {/* Article Subtitle */}
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Subtitle or Author Name
        </Typography>

        {/* Article Content - You can use a library like react-markdown to render Markdown content */}
        <Typography variant="body1" paragraph>
          This is the introduction or the first paragraph of your article. You can add more
          paragraphs as needed.
        </Typography>

        <Typography variant="body1" paragraph>
          Another paragraph of your article goes here. You can include text, images, and other
          media.
        </Typography>

        {/* Article Image */}
        <CardMedia
          component="img"
          height="200"
          image="https://example.com/another-image.jpg"
          alt="Another Image"
        />

        {/* Additional paragraphs or media can be added here */}

        {/* Download and Share Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<GetAppIcon />}
            onClick={() => {
              // Handle download logic
              console.log('Download clicked');
            }}
          >
            Download
          </Button>

          <IconButton
            color="primary"
            aria-label="share"
            onClick={() => {
              // Handle share logic
              console.log('Share clicked');
            }}
          >
            <ShareIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default Article;
