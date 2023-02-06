import { FilterType } from '../const.js';
import { isPointfuture } from './point.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isPointfuture(point.dateFrom)),
};

export { filter };
