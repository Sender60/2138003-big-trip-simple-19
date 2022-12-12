import { render } from '../render.js';
import TripEventListView from '../view/trip-event-list-view';
import ListSortView from '../view/list-sort-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/trip-point-view.js';
import ListFilterView from '../view/list-filter-view.js';
import NewPointView from '../view/add-new-point-view.js';

const ROUTE_POINTS = 3;
const tripEventsElement = document.querySelector('.trip-events');

export default class TripPresenter {
  tripComponent = new TripEventListView();

  constructor({ filterContainer }) {
    this.filterContainer = filterContainer;
  }

  init() {
    render(new ListFilterView(), this.filterContainer);
    render(new ListSortView(), tripEventsElement);
    render(this.tripComponent, tripEventsElement);
    render(new EditPointView(), this.tripComponent.getElement());
    render(new NewPointView(), this.tripComponent.getElement());
    for (let i = 0; i < ROUTE_POINTS; i++) {
      render(new PointView(), this.tripComponent.getElement());
    }
  }
}
