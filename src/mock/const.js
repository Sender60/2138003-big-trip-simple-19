const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

const getRandomNumber = (min, max) => {
  if(min < 0 || max < 0 || max <= min){
    return NaN;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomArrayElement = (items) => (
  items[Math.floor(Math.random() * items.length)]
);

export { MIN_NUMBER, MAX_NUMBER, getRandomNumber, getRandomArrayElement };
