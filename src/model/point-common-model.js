import Observable from '../framework/observable.js';
import { getOffers, getDestinations, getOffersByType } from '../mock/mock.js';

export default class PointCommonModel extends Observable {
  #allOffers = getOffers();
  #offersByType = getOffersByType();
  #allDestinations = getDestinations();

  get pointCommon() {
    return {
      allOffers: this.#allOffers,
      offersByType: this.#offersByType,
      allDestinations: this.#allDestinations,
    };
  }
}
