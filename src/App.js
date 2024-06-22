// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchNews, resetFilters } from './features/newsSlice/newsSlice';
import HomePage from './components/Home';
import NewsDetailPage from './components/NewsDetail';
import Layout from './components/Layout';

const App = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.news);
// at start fetching a genral category news
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchNews({ page: 1, category: '' }));
  }, [dispatch]);
// while selecting a new category sesting the previous category
  const handleSelectCategory = (category) => {
    dispatch(resetFilters());
    dispatch(fetchNews({ page: 1, category }));
  };
// handling home click to ensure all filters are reset and reach to the starting page
  const handleHomeClick = () => {
    dispatch(resetFilters());
    dispatch(fetchNews({ page: 1, category: '' }));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout categories={categories} onSelectCategory={handleSelectCategory} onHomeClick={handleHomeClick}><HomePage /></Layout>} />
        <Route path="/articles/:id" element={<Layout categories={categories} onSelectCategory={handleSelectCategory} onHomeClick={handleHomeClick}><NewsDetailPage /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
