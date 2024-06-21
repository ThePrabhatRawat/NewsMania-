import axios from "axios";

const API_KEY = '283d6fdb6fd04ebab9a10398d42643e6';
const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=in';
// A mock function to mimic making an async request for data
export function fetchNews(params){
  return new Promise(async(resolve)=>{
    const [page , category] = params;
    const categoryParam = category ? `&category=${category}` : '';
    const response = await axios.get(`${BASE_URL}?page=${page}&pageSize=10${categoryParam}&apiKey=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    resolve({ data });
  })
};
