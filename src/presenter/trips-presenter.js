import { render, RenderPosition } from '../framework/render.js';
import TripEventListView from '../view/trip-event-list-view';
import ListSortView from '../view/list-sort-view.js';
import ListEmptyView from '../view/list-empty-view.js';
import PointPresenter from './point-presenter.js';
import { SortType } from '../const.js';
import { sortPriceDown, sortTimeDown, updateItem } from '../utils/point.js';
import ListFilterView from '../view/list-filter-view.js';
import NoFutureEventView from '../view/no-future-event-view.js';
import { getFilteredPointsByType } from '../utils/filter.js';
import { FilterType } from '../const.js';

export default class TripPresenter {
  #tripComponent = new TripEventListView();
  #pointContainer = null;
  #pointsModel = null;
  #listPoints = [];
  #emptyListComponent = new ListEmptyView;
  #currentSortingType = SortType.DAY;
  #sourcedListPoints = [];
  #sortingComponent = null;
  #pointPresenter = new Map();
  #filterComponent = null;
  #filteredPoints = [];
  #currentFilterType = FilterType.EVERYTHING;
  #headerContainer = null;
  #noFutureEventComponent = new NoFutureEventView;

  constructor({pointContainer, pointsModel, filteredPoints, headerFiltersElement}) {
    this.#pointContainer = pointContainer ;
    this.#pointsModel = pointsModel;
    this.#filteredPoints = filteredPoints;
    this.#headerContainer = headerFiltersElement;
  }

  init() {
    this.#listPoints = [...this.#pointsModel.points];
    this.#sourcedListPoints = [...this.#pointsModel.points];
    this.#renderListPoints();
    this.#renderFilter();
  }

  #renderFilter() {
    this.#filterComponent = new ListFilterView({
      filters: this.#filteredPoints,
      currentFilterType: this.#currentFilterType,
      onFilterChange: this.#handleFilterChange
    });
    this.#filteredPoints = getFilteredPointsByType(this.#pointsModel.points, FilterType.EVERYTHING);
    render(this.#filterComponent, this.#headerContainer);
  }

  #handleFilterChange = (filterType) => {
    if (this.#currentFilterType === filterType) {
      return;
    }
    //По ТЗ при смене фильтра, сортировка по умолчанию
    this.#filteredPoints = getFilteredPointsByType(this.#pointsModel.points, filterType);
    this.#currentFilterType = filterType;
    this.#clearPointList();
    this.#renderFilteredPoints();
  };

  #renderFilteredPoints () {
    if (!this.#filteredPoints.length) {
      this.#renderNoFutureEventMsg();
      return ;
    }

    this.#filteredPoints.forEach((point) => this.#renderPoint(point));
  }

  #renderNoFutureEventMsg() {
    render(this.#noFutureEventComponent, this.#pointContainer);
  }

  #handleModelChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#listPoints = updateItem(this.#listPoints, updatedPoint);
    this.#sourcedListPoints = updateItem(this.#sourcedListPoints, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #sortPoints(sortType) {
    switch(sortType) {
      case SortType.PRICE:
        this.#listPoints.sort(sortPriceDown);
        break;
      case SortType.TIME:
        this.#listPoints.sort(sortTimeDown);
        break;
      default:
        this.#listPoints = [...this.#sourcedListPoints];
    }
    this.#currentSortingType = sortType;
  }

  #handleSortingTypeChange = (sortType) => {
    if (this.#currentSortingType === sortType) {
      return;
    }
    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPointList();
  };

  #renderSort() {
    this.#sortingComponent = new ListSortView({
      onSortingTypeChange: this.#handleSortingTypeChange
    });
    render(this.#sortingComponent, this.#pointContainer, RenderPosition.AFTERBEGIN);
  }

  #renderEmptyList() {
    render(this.#emptyListComponent, this.#pointContainer);
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsContainer: this.#tripComponent.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModelChange,
    });
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  }

  #clearPointList() {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  }

  #renderPointList() {
    render(this.#tripComponent, this.#pointContainer);

    for (let i = 0; i < this.#listPoints.length; i++) {
      this.#renderPoint(this.#listPoints[i]);
    }
  }

  #renderListPoints() {
    render(this.#tripComponent, this.#pointContainer);
    if(this.#listPoints.every((point) => point.name)) {
      this.#renderEmptyList();
    }
    else {
      this.#renderSort();
      this.#renderPointList();
    }
  }
}
