import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM DD';
const TIME_FORMAT = 'hh:mm';
const EDIT_DATE_FORMAT = 'DD/MM/YY hh:mm';

function humanizeTravelDay(dateFrom) {
  return dateFrom ? dayjs(dateFrom).format(DATE_FORMAT) : '';
}

function humanizeTimeFromTo(dateTo) {
  return dateTo ? dayjs(dateTo).format(TIME_FORMAT) : '';
}

function humanizeTimeEdit(dateTime) {
  return dateTime ? dayjs(dateTime).format(EDIT_DATE_FORMAT) : '';
}

function humanizeTravelTime(from, to) {
  return dayjs(to).diff(dayjs(from), 'h');
}

function isPointfuture(dateFrom) {
  return dayjs(dateFrom).isAfter(dayjs());
}

function sortTimeDown(pointA, pointB) {
  const spendTimeA = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const spendTimeB = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));
  return spendTimeB - spendTimeA;
}

function sortPriceDown(pointA, pointB) {
  return pointB.basePrice - pointA.basePrice;
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export { humanizeTimeFromTo, humanizeTravelDay, humanizeTimeEdit, humanizeTravelTime, isPointfuture, sortTimeDown, sortPriceDown, updateItem };
