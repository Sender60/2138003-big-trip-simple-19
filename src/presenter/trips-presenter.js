import { render, replace } from '../framework/render.js';
import TripEventListView from '../view/trip-event-list-view';
import ListSortView from '../view/list-sort-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/trip-point-view.js';
import { isEscapeKey } from '../util.js';
import ListEmptyView from '../view/list-empty-view.js';

export default class TripPresenter {
  #tripComponent = new TripEventListView();

  #pointContainer = null;
  #pointsModel = null;
  #listPoints = [];

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
      render(new ListEmptyView(), this.#pointContainer);
      return;
    }

    render(new ListSortView(), this.#pointContainer);
    render(this.#tripComponent, this.#pointContainer);
    // render(new NewPointView(), this.#tripComponent.element);
    this.#listPoints.forEach((point) => this.#renderPoint(point));
  }

  #renderPoint(point){
    const pointComponent = new PointView({
      point,
      onRollupBtnClick: () => {
        replacePointToForm.call(this);
        document.addEventListener('keydown', onEscKeyDown);
      }
    });
    const pointEditComponent = new EditPointView({point,
      onFormSubmit: () => {
        replaceFormToPoint.call(this);
        document.removeEventListener('keydown', onEscKeyDown);
      },
      onRollupBtnClick: () => {
        replaceFormToPoint.call(this);
        document.removeEventListener('keydown', onEscKeyDown);
      }});

    // const pointRollupBtn = pointComponent.element.querySelector('.event__rollup-btn');
    // const editPointForm = pointEditComponent.element.querySelector('form');
    // const editRollupBtn = editPointForm.querySelector('.event__rollup-btn');

    function replacePointToForm () {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToPoint () {
      replace(pointComponent, pointEditComponent);
    }

    function onEscKeyDown (evt) {
      if (isEscapeKey) {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    }

    render(pointComponent, this.#tripComponent.element);
  }
}
