// src/components/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col ,Alert } from 'react-bootstrap';
import { fetchNews, fetchNewsByKeyword } from '../features/newsSlice/newsSlice.js';
import NewsCard from './NewsCard';
import NewsPagination from './Pagination';
import Spinner from '../components/Spinner.jsx'

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, error, currentPage, selectedCategory, searchKeyword } = useSelector((state) => state.news);
    // useeffect to dispatch the general category fetching and to response to change in vaious changes like category select and all
  useEffect(() => {
    if (searchKeyword) {
      dispatch(fetchNewsByKeyword({ page: currentPage, keyword: searchKeyword }));
    } else {
      dispatch(fetchNews({ page: currentPage, category: selectedCategory }));
    }
  }, [dispatch, currentPage, selectedCategory, searchKeyword]);

  // status handling while fetching the data
  if (status === 'loading') {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

  return (
    <Container className="mt-4">
      <Row>
        {articles.map((article, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <NewsCard
              id={index}
              title={article.title}
              image={article.image}
              description={article.description}
              publishedAt={article.publishedAt}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <NewsPagination />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
