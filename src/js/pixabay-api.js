// src/js/pixabay-api.js
import axios from 'axios';

const API_KEY = '52837655-6c21f27bf556d895abe6a0fd0';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 15000,
});

/**
 * @param {string} query
 * @returns {Promise<any>} data (об’єкт відповіді Pixabay)
 */
export async function getImagesByQuery(query) {
  const { data } = await instance.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40, 
    },
  });
  return data;
}
