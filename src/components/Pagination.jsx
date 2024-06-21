// src/components/Pagination.js
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, fetchNews, fetchNewsByKeyword } from '../features/newsSlice/newsSlice';

const NewsPagination = () => {
  const dispatch = useDispatch();
  const { totalResults, currentPage, selectedCategory, searchKeyword } = useSelector((state) => state.news);

  const totalPages = Math.ceil(totalResults / 10);

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
    if (searchKeyword) {
      dispatch(fetchNewsByKeyword({ page: pageNumber, keyword: searchKeyword }));
    } else {
      dispatch(fetchNews({ page: pageNumber, category: selectedCategory }));
    }
  };

  const getPaginationItems = () => {
    const items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <Pagination className="flex-wrap">
      <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
      <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
      {getPaginationItems()}
      <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
    </Pagination>
  );
};

export default NewsPagination;
