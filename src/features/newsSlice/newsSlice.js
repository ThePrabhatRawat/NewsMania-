// src/slices/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

// Async thunks
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ page, category }) => {
    console.log(page)
    const response = await axios.get(`${baseURL}/top-headlines`, {
      params: {
        category: category || 'general',
        lang: 'en',
        page,
        country: 'in',
        max: 10,
        apikey: apiKey,
      },
    });
    return response.data;
  }
);

export const fetchNewsByKeyword = createAsyncThunk(
  'news/fetchNewsByKeyword',
  async ({ page, keyword }) => {
    const response = await axios.get(`${baseURL}/search`, {
      params: {
        q: keyword,
        lang: 'en',
        page,
        country: 'in',
        max: 10,
        apikey: apiKey,
      },
    });
    return response.data;
  }
);

export const fetchCategories = createAsyncThunk(
  'news/fetchCategories',
  async () => {
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    return categories;
  }
);

export const fetchArticleById = createAsyncThunk(
  'news/fetchArticleById',
  async (id, { getState }) => {
    const { articles } = getState().news;
    return articles[id];
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    article: null,
    status: 'idle',
    error: null,
    totalResults: 0,
    currentPage: 1,
    selectedCategory: '',
    searchKeyword: '',
    categories: [],
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    resetFilters: (state) => {
      state.selectedCategory = '';
      state.searchKeyword = '';
      state.currentPage = 1;
    },
    clearArticle: (state) => {
      state.article = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalArticles;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchNewsByKeyword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewsByKeyword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalArticles;
      })
      .addCase(fetchNewsByKeyword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.article = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage, setSearchKeyword, resetFilters, clearArticle } = newsSlice.actions;

export default newsSlice.reducer;
