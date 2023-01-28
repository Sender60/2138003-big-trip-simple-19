import { getRandomNumber, getRandomArrayElement } from './const.js';
import { MIN_NUMBER, MAX_NUMBER } from './const.js';
import { nanoid } from 'nanoid';

const offersTypes = [
  {
    'type': 'taxi',
    'offers': [{
      'id': 1,
      'title': 'Choose the radio station',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Upgrade to a business class',
      'price': 140
    }]
  },
  {
    'type': 'bus',
    'offers': [{
      'id': 1,
      'title': 'Choose the radio station',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Upgrade to a business class',
      'price': 140
    }]
  },
  {
    'type': 'train',
    'offers': [{
      'id': 1,
      'title': 'Choose the radio station',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Upgrade to a business class',
      'price': 140
    }]
  },
  {
    'type': 'ship',
    'offers': [{
      'id': 1,
      'title': 'Choose the radio station',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Upgrade to a business class',
      'price': 140
    }]
  },
  {
    'type': 'drive',
    'offers': [{
      'id': 1,
      'title': 'Choose the radio station',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Upgrade to a business class',
      'price': 140
    }]
  },
  {
    'type': 'flight',
    'offers': [{
      'id': 3,
      'title': 'Choose seats',
      'price': 5
    },
    {
      'id': 2,
      'title': 'Upgrade to a business class',
      'price': 140
    },
    {
      'id': 4,
      'title': 'Add meal',
      'price': 15
    }]
  },
  {
    'type': 'check-in',
    'offers': [{
      'id': 3,
      'title': 'Choose seats',
      'price': 5
    },
    {
      'id': 4,
      'title': 'Add meal',
      'price': 15
    }]
  },
  {
    'type': 'sightseeing',
    'offers': [{
      'id': 1,
      'title': 'Choose the radio station',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Upgrade to a business class',
      'price': 140
    }]
  },
  {
    'type': 'restaurant',
    'offers': [{
      'id': 1,
      'title': 'Choose the radio station',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Upgrade to a business class',
      'price': 140
    }]
  }
];

const destinations = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(MIN_NUMBER, MAX_NUMBER)}`,
      }
    ]
  },
  {
    id: 2,
    description: 'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    name: 'Geneve',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(MIN_NUMBER, MAX_NUMBER)}`,
      }
    ]
  },
  {
    id: 3,
    description: 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(MIN_NUMBER, MAX_NUMBER)}`,
      }
    ]
  }
];

const MOCK_POINTS = [
  {
    type: 'taxi',
    offers: [1],
    destination: 2,
    basePrice: 500,
    dateFrom: '2019-07-11T20:35:56.845Z',
    dateTo: '2019-07-12T11:25:13.375Z'
  },
  {
    type: 'bus',
    offers: [1, 2],
    destination: 1,
    basePrice: 40,
    dateFrom: '2019-07-10T21:50:00.845Z',
    dateTo: '2019-07-11T11:22:13.375Z'
  },
  {
    type: 'train',
    offers: [],
    destination: 1,
    basePrice: 200,
    dateFrom: '2019-07-09T22:55:56.845Z',
    dateTo: '2019-07-10T12:22:13.375Z'
  },
  {
    type: 'ship',
    offers: [1],
    destination: 2,
    basePrice: 80,
    dateFrom: '2019-07-10T22:50:56.845Z',
    dateTo: '2019-07-11T11:22:10.375Z'
  },
  {
    type: 'drive',
    offers: [1, 2],
    destination: 3,
    basePrice: 90,
    dateFrom: '2019-07-11T10:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z'
  },
  {
    type: 'flight',
    offers: [2],
    destination: 1,
    basePrice: 150,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-10T11:23:59.005Z'
  },
  {
    type: 'check-in',
    offers: [2],
    destination: 3,
    basePrice: 150,
    dateFrom: '2019-07-10T12:55:56.845Z',
    dateTo: '2019-07-10T22:22:13.375Z'
  },
  {
    type: 'sightseeing',
    offers: [],
    destination: 2,
    basePrice: 100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z'
  },
  {
    type: 'restaurant',
    offers: [1, 2],
    destination: 1,
    basePrice: 100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z'
  }
];

const getRandomPoint = () => ({
  id: nanoid(),
  ...getRandomArrayElement(MOCK_POINTS)});

export { destinations, offersTypes, getRandomPoint};
