import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './projects.scss';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    videoUrl: 'https://www.example.com/project1.mp4',
    description: 'Description for Project 1.',
  },
  {
    id: 2,
    title: 'Project 2',
    videoUrl: 'https://www.example.com/project2.mp4',
    description: 'Description for Project 2.',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      {projects.map((project) => (
        <Card key={project.id} style={{ maxWidth: 345, margin: '20px' }}>
          <Link to={`/project/${project.id}`}>
            <video width="100%" height="200" controls>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Projects;