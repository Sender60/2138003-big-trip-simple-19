import TripPresenter from './presenter/trips-presenter.js';
import PointsModel from './model/model.js';
import { getFilter } from './mock/filter.js';

const tripEventsElement = document.querySelector('.trip-events');
const headerFiltersElement = document.querySelector('.trip-controls__filters');
const pointsModel = new PointsModel();

const filteredPoints = getFilter(pointsModel.points);

const tripPresenter = new TripPresenter({
  pointContainer: tripEventsElement,
  pointsModel,
  filteredPoints,
  headerFiltersElement
});


tripPresenter.init();
