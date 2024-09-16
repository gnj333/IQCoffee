const parus = {
  name: 'IQCoffe Паруса',
  slug: 'parus',
  address: 'Малыгина, 90',
  mode: {
    weekday: {
      start: '14:00',
      end: '18:00',
    },
    free: {
      start: '10:00',
      end: '22:00',
    },
  },
  stylebook: {
    mainColor: '#FA5452',
    secondColor: '#FFC633',
    opacity: '0.18',
    pattern: 'hexagons',
  },
  categories: [
    {
      id: 1,
      category: 'breakfast',
      icon: 'breakfast',
      name: 'Завтраки',
    },
    {
      id: 2,
      category: 'drinks',
      icon: 'drinks',
      name: 'Напитки',
    },
    {
      id: 3,
      category: 'food',
      icon: 'food',
      name: 'Еда',
    },
    {
      id: 4,
      category: 'beans',
      icon: 'beans',
      name: 'Зерно',
    },
    {
      id: 5,
      category: 'accessories',
      icon: 'accessories',
      name: 'Аксессуары',
    },
  ],
  photos: [
    {
      id: 1,
      alt: 'Фото заведения',
      src: 'https://assets.turbologo.ru/blog/ru/2020/02/18162724/a5a4b6991268b801e30d82bbc757c672-958x575.jpg',
    },
    {
      id: 2,
      alt: 'Фото заведения',
      src: 'https://media-cdn.tripadvisor.com/media/photo-s/18/be/63/df/caption.jpg',
    },
    {
      id: 3,
      alt: 'Фото заведения',
      src: 'https://burobiz-a.akamaihd.net/uploads/images/103508/large_19-05-2022_18-45-27.jpg',
    },
    {
      id: 4,
      alt: 'Фото заведения',
      src: 'https://alterno-ds.ru/d/8f85dc3412785556c4e802b8b40.jpg',
    },
    {
      id: 5,
      alt: 'Фото заведения',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pfr9FafOhqsYNE4ESuHi1zhJ-kfIwf6uZg&s',
    },
  ],
};

module.exports = parus
