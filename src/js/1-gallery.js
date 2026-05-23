import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg',
    original:
      'https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg',
    description: 'Mountain River',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg',
    description: 'Country Road',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_1280.jpg',
    original:
      'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_1280.jpg',
    description: 'Sunset Tree',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    description: 'Lone Tree',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg',
    original:
      'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg',
    description: 'Sea Coast',
  },
];

const galleryEl = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
