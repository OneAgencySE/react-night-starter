const items = [
  {
    id: 1,
    image: {
      url: 'https://cataas.com/cat/says/Happy!',
      description: 'A very happy cat',
    },
    title: 'Happy Cat',
    price: 399,
  },
  {
    id: 2,
    image: {
      url: 'https://cataas.com/cat/says/Grumpy!',
      description: 'A very grumpy cat',
    },
    title: 'Grumpy Cat',
    price: 99,
  },
  {
    id: 3,
    image: {
      url: 'https://cataas.com/cat/says/Sad!',
      description: 'A very sad cat',
    },
    title: 'Sad Cat',
    price: 139,
  },
  {
    id: 4,
    image: {
      url: 'https://cataas.com/cat/says/Lucky!',
      description: 'A very lucky cat',
    },
    title: 'Lucky Cat',
    price: 1337,
  },
];

export const getAll = () => {
  return items.slice();
};

export const getById = (id) => {
  const item = items.find((item) => item.id === id);
  if (!item) {
    return null;
  }
  return Object.assign({}, item);
};

export default { getAll, getById };
