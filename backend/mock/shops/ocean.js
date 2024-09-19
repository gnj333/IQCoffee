const ocean = {
  name: 'IQCoffe Океан',
  slug: 'ocean',
  address: 'Республики 42',
  mode: {
    weekday: {
      start: '10:00',
      end: '14:00',
    },
    free: {
      start: '10:00',
      end: '22:00',
    },
  },
  stylebook: {
    mainColor: '#5DD1B7',
    secondColor: '#F3B6D1',
    opacity: '0.32',
    pattern: 'leaves',
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
      id: 3,
      alt: 'Фото заведения',
      src: 'https://media-cdn.tripadvisor.com/media/photo-s/18/be/63/df/caption.jpg',
    },
    {
      id: 4,
      alt: 'Фото заведения',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Ty_Clu3r2ndyEW89MVQr8DIX-gAk8D7jRQ&s',
    },
    {
      id: 5,
      alt: 'Фото заведения',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPndOEHRrWTJ3ztLQ6jQWoJ-j3wtHxvdamQ&s',
    },
  ],
};

module.exports = ocean
