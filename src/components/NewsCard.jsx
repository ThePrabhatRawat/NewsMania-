// src/components/NewsCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//card component to dispaly the image ,vedio title etc. of a perticular article in sqaired shaped form
const NewsCard = ({ id, title, image, description, publishedAt }) => {
  
  return (
    <Card className="h-100 mt-1 news-card mt-1 rounded-3">
      <Card.Img
        variant="top"
        src={image || 'https://via.placeholder.com/150'}
        alt={title || 'News image'}
        style={{ height: '200px', objectFit: 'cover' }}
        className='rounded-3 img-fluid'
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className='news-title'>{title}</Card.Title>
        <Card.Text className="flex-grow-1 .news-summary">{description}</Card.Text>
        <Card.Text>
          <small className="text-muted">Published on: {new Date(publishedAt).toLocaleDateString()}</small>
        </Card.Text>
        <Link to={`/articles/${id}`} className="mt-auto">
          <Button variant="primary" className="w-100 read-more-button">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
