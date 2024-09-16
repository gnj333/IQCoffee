const erve = {
  name: 'IQCoffe Эрвье',
  slug: 'erve',
  address: 'Эрвье, 30 к.4',
  mode: {
    weekday: {
      start: '20:00',
      end: '04:00',
    },
    free: {
      start: '10:00',
      end: '22:00',
    },
  },
  stylebook: {
    mainColor: '#01A9D5',
    secondColor: '#FE6A69',
    opacity: '0.08',
    pattern: 'square',
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
      src: 'https://maralin.ru/img/catalog_covers/4398-16432099690.jpg',
    },
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

module.exports = erve
