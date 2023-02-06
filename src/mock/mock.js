import { nanoid } from 'nanoid';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const mockPoints = [
  {
    basePrice: 100,
    dateFrom: new Date('2022-01-01T05:30'),
    dateTo: new Date('2022-01-02T21:45'),
    destId: 0,
    selectedOffers: [1, 2],
    type: 'taxi',
    id: nanoid(),
  },
  {
    basePrice: 150,
    dateFrom: new Date('2022-02-02T01:15'),
    dateTo: new Date('2022-03-03T02:20'),
    destId: 1,
    selectedOffers: [1],
    type: 'bus',
    id: nanoid(),
  },
  {
    basePrice: 200,
    dateFrom: new Date('2022-10-10T15:30'),
    dateTo: new Date('2022-11-11T17:30'),
    destId: 2,
    selectedOffers: [2, 3],
    type: 'train',
    id: nanoid(),
  },
  {
    basePrice: 130,
    dateFrom: new Date('2023-12-01T18:00'),
    dateTo: new Date('2023-01-11T06:30'),
    destId: 3,
    selectedOffers: [3, 4],
    type: 'ship',
    id: nanoid(),
  },
];

const mockOffers = [
  {
    id: 0,
    title: 'Order Uber',
    price: 20,
  },
  {
    id: 1,
    title: 'Add luggage',
    price: 50,
  },
  {
    id: 2,
    title: 'Switch to comfort',
    price: 80,
  },
  {
    id: 3,
    title: 'Add breakfast',
    price: 100,
  },
  {
    id: 4,
    title: 'Rent a car',
    price: 200,
  },
];

const mockDestinations = [
  {
    id: 0,
    description: 'Ashgabat is the capital of Turkmenistan. It’s known for its white marble buildings and grandiose national monuments.',
    name: 'Ashgabat',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Ashgabat parliament building',
      }
    ]
  },
  {
    id: 1,
    description: 'Kabul is the capital and largest city of Afghanistan. Located in the eastern half of the country, it is also a municipality, forming part of the Kabul Province.',
    name: 'Kabul',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Kabul parliament building',
      }
    ]
  },
  {
    id: 2,
    description: 'Caracas, Venezuela\'s capital, is a commercial and cultural center located in a northern mountain valley.',
    name: 'Caracas',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Caracas parliament building',
      }
    ]
  },
  {
    id: 3,
    description: 'Pyongyang is the capital and largest city of North Korea, where it is known as the "Capital of the Revolution".',
    name: 'Pyongyang',
    pictures: [
      {
        src: 'https://i.ibb.co/CPm5sb1/kim.jpg',
        description: 'The leader of the Workers\' Party',
      }
    ]
  },
];

const mockOffersByType = [
  {
    type: 'taxi',
    offers: [0, 1, 2, 3]
  },
  {
    type: 'bus',
    offers: [0, 1, 2]
  },
  {
    type: 'train',
    offers: [2, 3]
  },
  {
    type: 'ship',
    offers: [3, 4]
  },
  {
    type: 'drive',
    offers: [1, 4]
  },
  {
    type: 'flight',
    offers: [2, 4]
  },
  {
    type: 'check-in',
    offers: []
  },
  {
    type: 'sightseeing',
    offers: [0, 1, 3]
  },
  {
    type: 'restaurant',
    offers: [0, 1, 2, 3, 4]
  },
];

const getRandomPoint = () => {
  const point = getRandomArrayElement(mockPoints);
  return point;
};

const getPoints = () => mockPoints;
const getOffers = () => mockOffers;
const getDestinations = () => mockDestinations;
const getOffersByType = () => mockOffersByType;

export { getPoints, getRandomPoint, getOffers, getDestinations, getOffersByType };
