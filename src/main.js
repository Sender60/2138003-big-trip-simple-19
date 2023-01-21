import TripPresenter from './presenter/trips-presenter.js';
import PointsModel from './model/model.js';
import {render} from './framework/render.js';
import ListFilterView from './view/list-filter-view.js';
import { generateFilter } from './mock/filter.js';

const tripEventsElement = document.querySelector('.trip-events');
const headerElement = document.querySelector('.trip-controls');
const pointsModel = new PointsModel();

const tripPresenter = new TripPresenter({
  pointContainer: tripEventsElement,
  pointsModel
});

const filters = generateFilter(pointsModel.points);
render(new ListFilterView({filters}), headerElement);

tripPresenter.init();
