import React from 'react';
import NewsCard from './NewsCard';
import { Container, Row, Col } from 'react-bootstrap';

const NewsList = ({ articles }) => {
  return (
    <Container>
      <Row>
        {articles.map((article, index) => (
          <Col key={index} md={4} className="mb-4">
            <NewsCard
              id={index}
              title={article.title}
              image={article.urlToImage}
              summary={article.description}
              content={article.content}
              url={article.url}
              publishedAt={article.publishedAt}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsList;
