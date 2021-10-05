'use strict';

const movieDB = {
  movies: [
    'Psycho',
    'The Silence of the Lambs',
    'Pulp Fiction',
    'Fight Club',
    'The Truman Show',
  ],
};

const adv = document.querySelectorAll('.promo__adv img'),
  poster = document.querySelector('.promo__bg'),
  genre = poster.querySelector('.promo__genre'),
  movieList = document.querySelector('.promo__interactive-list');

adv.forEach((item) => {
  item.remove();
});

genre.textContent = 'drama';

poster.style.backgroundImage =
  'url("https://cinemaholics.ru/content/images/2018/10/leon-the-professional-1108x0-c-default.jpg")';

movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
  <li class="promo__interactive-item">${i + 1} ${film}
  <div class="delete"></div>
</li>
    `;
});
