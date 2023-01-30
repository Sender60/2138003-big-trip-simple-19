import { FilterType } from '../const.js';
import { isPointfuture } from '../utils/point.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isPointfuture(point.dateFrom))
};

const getFilteredPointsByType = (points, filterType) => {
  switch (filterType) {
    case FilterType.EVERYTHING:
      return points;
    case FilterType.FUTURE:
      return points.filter((point) => isPointfuture(point.dateFrom, point.dateTo));
    default:
      return points;
  }
};

export {filter, getFilteredPointsByType};
