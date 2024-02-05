import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// import css from 'file.css';

const form = {
  searchForm: document.querySelector('.search-form'),
  input: document.querySelector('[type="text"]'),
};

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.searchForm.addEventListener('submit', onSearchImg);

function onSearchImg(event) {
  event.preventDefault();
  const searchQuery = form.input.value.trim();
  if (!searchQuery) {
    iziToast.error({
      message: 'Fill in the input field!',
      position: 'topRight',
    });
    return;
  }
  // Показувати завантажувач
  loader.style.display = 'block';

  // Виклик запиту до сервера та отримання даних
  fetchQuery(searchQuery);

  form.searchForm.reset();
}

// =========================================================
function fetchQuery(searchQuery) {
  const searchParams = new URLSearchParams({
    key: '42191077-576543231991193ea17287b56',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${searchParams}`;
  //   console.log(url);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageSize: 10.5,
          position: 'topRight',
        });
        // Якщо запит не валідний, тоді очищуємо розмітку
        galleryContainer.innerHTML = '';
      } else {
        // console.log(data.hits);
        displayImages(data.hits);
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      // Приховати індикатор завантаження після завершення запиту
      loader.style.display = 'none';
    });
}

// =====================================================

function displayImages(images) {
  // Очистити існуючу галерею
  galleryContainer.innerHTML = '';
  const galleryItem = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <div class="image-details">
    <p><b>Likes</b> ${likes}</p>
    <p><b>Views</b> ${views}</p>
    <p><b>Comments</b> ${comments}</p>
    <p><b>Downloads</b> ${downloads}</p>
  </div>
</li>`;
      }
    )
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', galleryItem);
  // Додаємо бібліотеку SimpleLightbox
  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
  });
  gallery.refresh();
}
