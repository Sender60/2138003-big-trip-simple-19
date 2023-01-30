import { generateSortOptions } from '../utils/sort';
import { SortType } from '../const';
import dayjs from 'dayjs';

const generateSort = (points) =>
  Object.entries(generateSortOptions).map(([optionName, filterPoints]) => ({
    name: optionName,
    sortedPoints: filterPoints(points),
  }));

const getSortedPoints = (points, sortType) => {
  switch (sortType) {
    case SortType.DAY:
      return points.sort((pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom)));
    case SortType.PRICE:
      return points.sort((pointA, pointB) => pointB.basePrice - pointA.basePrice);
    default:
      return points;
  }
};

export { generateSort, getSortedPoints };
