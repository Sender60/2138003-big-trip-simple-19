import { render } from '../render.js';
import TripEventListView from '../view/trip-event-list-view';
import ListSortView from '../view/list-sort-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/trip-point-view.js';
import ListFilterView from '../view/list-filter-view.js';
import NewPointView from '../view/add-new-point-view.js';

const tripEventsElement = document.querySelector('.trip-events');

export default class TripPresenter {
  tripComponent = new TripEventListView();

  constructor({ filterContainer, pointsModel}) {
    this.filterContainer = filterContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.listPoints = [...this.pointsModel.getPoints()];
    render(new ListFilterView(), this.filterContainer);
    render(new ListSortView(), tripEventsElement);
    render(this.tripComponent, tripEventsElement);
    render(new EditPointView(this.listPoints[0]), this.tripComponent.getElement());
    render(new NewPointView(), this.tripComponent.getElement());
    for (let i = 0; i < this.listPoints.length; i++) {
      render(new PointView({point: this.listPoints[i]}), this.tripComponent.getElement());
    }
  }
}
