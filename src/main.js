import { render } from './framework/render.js';
import NewPointButtonView from './view/new-point-button-view.js';
import TripPresenter from './presenter/trips-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/points-model.js';
import PointCommonModel from './model/point-common-model.js';
import FilterModel from './model/filter-model.js';
import PointsApiService from './api/points-api-service.js';
import PointCommonApiService from './api/point-common-api-service.js';

const AUTHORIZATION = 'Basic tsVaL7Ypbm9c4UVdcef3';
const END_POINT = 'https://19.ecmascript.pages.academy/big-trip-simple';

const tripEventsElement = document.querySelector('.trip-events');
const filterContainerElement = document.querySelector('.trip-controls__filters');
const siteHeaderElement = document.querySelector('.trip-main');

const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const pointCommonModel = new PointCommonModel({
  pointCommonApiService: new PointCommonApiService(END_POINT, AUTHORIZATION)
});

const filterModel = new FilterModel();

const tripPresenter = new TripPresenter({
  boardContainer: tripEventsElement,
  pointsModel,
  pointCommonModel,
  filterModel,
  onNewPointDestroy: handleNewPointFormClose,
});

const filterPresenter = new FilterPresenter({
  filterContainer: filterContainerElement,
  filterModel,
  pointsModel
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  tripPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

filterPresenter.init();
tripPresenter.init();

Promise.all([
  pointsModel.init(),
  pointCommonModel.init()])
  .then(() => {
    render(newPointButtonComponent, siteHeaderElement);
  });
