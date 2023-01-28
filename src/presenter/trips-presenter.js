import { render } from '../framework/render.js';
import TripEventListView from '../view/trip-event-list-view';
import ListSortView from '../view/list-sort-view.js';
import ListEmptyView from '../view/list-empty-view.js';
import PointPresenter from './point-presenter.js';

export default class TripPresenter {
  #tripComponent = new TripEventListView();

  #pointContainer = null;
  #pointsModel = null;
  #listPoints = [];
  #emptyListComponent = new ListEmptyView;

  constructor({ pointContainer , pointsModel}) {
    this.#pointContainer = pointContainer ;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#listPoints = [...this.#pointsModel.points];

    this.#renderPointsList();
  }

  #renderPointsList() {
    if (!this.#listPoints.length) {
      this.#renderEmptyList();
      return;
    }

    render(new ListSortView(), this.#pointContainer);
    render(this.#tripComponent, this.#pointContainer);
    // render(new NewPointView(), this.#tripComponent.element);
    this.#listPoints.forEach((point) => this.#renderPoint(point));
  }

  #renderEmptyList(){
    render(this.#emptyListComponent, this.#pointContainer);
  }


  #renderPoint(point){

    const pointPresenter = new PointPresenter ({
      pointsContainer: this.#tripComponent.element
    });
    pointPresenter.init(point);
  }
}
