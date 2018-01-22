import axios from 'axios';

export default () => axios.create({
  baseURL: 'https://thawing-wildwood-30315.herokuapp.com/',
});
