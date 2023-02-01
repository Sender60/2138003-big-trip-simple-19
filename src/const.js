import dayjs from 'dayjs';

const DATE_FORMAT_DATE = 'DD MMM';
const DATE_FORMAT_TIME = 'HH:mm';

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future'
};

const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const DATE_FORMAT = 'DD/MM/YY HH:mm';
const DEFAULT_START_DATE = dayjs().toISOString();
const DEFAULT_END_DATE = dayjs().add((1),'day').toISOString();

export { DATE_FORMAT_DATE, DATE_FORMAT_TIME, FilterType, SortType, DATE_FORMAT, DEFAULT_START_DATE, DEFAULT_END_DATE };
