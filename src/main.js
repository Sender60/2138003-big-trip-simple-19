import TripPresenter from './presenter/trips-presenter.js';

const headerElement = document.querySelector('.trip-controls');

const tripPresenter = new TripPresenter({
  filterContainer: headerElement
});

tripPresenter.init();
