// src/components/NewsDetailPage.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticleById, clearArticle } from '../features/newsSlice/newsSlice';
import { Container, Button, Spinner } from 'react-bootstrap';
// this page contains the detail view of the news in card component alogn with the link to actual site where the news is been posted
const NewsDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { article, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchArticleById(id));
    // clearing the articles at the end
    return () => {
      dispatch(clearArticle());
    };
  }, [dispatch, id]);
  // status handlers while fetching the news
  if (status === 'loading') {
    return <Spinner animation="border" />;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <Container className="mt-4">
      <Button variant="primary" onClick={() => navigate(-1)}>Back</Button>
      <h1 className="mt-4">{article.title}</h1>
      <p className="text-muted">{new Date(article.publishedAt).toLocaleDateString()}</p>
      <img src={article.image || 'https://via.placeholder.com/150'} alt={article.title} className="img-fluid mb-4 hovering" />
      <p>{article.content}</p>
      <Button variant="success" href={article.source.url} target="_blank" rel="noopener noreferrer">
        Read Full Article
      </Button>
    </Container>
  );
};

export default NewsDetailPage;
