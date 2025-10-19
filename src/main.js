// src/main.js
import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const form = document.getElementById('search-form');

form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();

  const query = form.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Введи пошуковий запит',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits || data.hits.length === 0) {
      iziToast.info({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    
    createGallery(data.hits);
  } catch (err) {
    console.error(err);
    iziToast.error({
      message: 'Сталася помилка при завантаженні. Спробуй ще раз.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
