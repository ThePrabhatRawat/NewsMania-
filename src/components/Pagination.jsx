// src/components/Pagination.js
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, fetchNews, fetchNewsByKeyword } from '../features/newsSlice/newsSlice';

const NewsPagination = () => {
  const dispatch = useDispatch();
  const { totalResults, currentPage, selectedCategory, searchKeyword } = useSelector((state) => state.news);

  const totalPages = Math.ceil(totalResults / 10);
// function to handle page change 
// currently this function will not work because of the use of api which doesn't allow pagination feature in free membership
  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
    if (searchKeyword) {
      dispatch(fetchNewsByKeyword({ page: pageNumber, keyword: searchKeyword }));
    } else {
      dispatch(fetchNews({ page: pageNumber, category: selectedCategory }));
    }
  };

  return (
    <Pagination className="flex-wrap">
      <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
      <Pagination.Item disabled>{`${currentPage} of ${totalPages} pages`}</Pagination.Item>
      <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
    </Pagination>
  );
};

export default NewsPagination;

