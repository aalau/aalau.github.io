import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ReactImg from '../../resources/aaon-lau-at-beach.jpg'
import './projects.scss'
import { CardContent, CardHeader } from '@mui/material';


const Projects = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <img orientation="top" src={'//:0'} />
      <CardHeader>
        <div>Card title</div>
        <CardContent>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardContent>
        <Button href="#">Go somewhere</Button>
      </CardHeader>
    </Card>
  )
}

export default Projects