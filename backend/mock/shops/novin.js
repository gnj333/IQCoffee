const novin = {
  name: 'IQCoffe Новин',
  slug: 'novin',
  address: '50 лет Октября 57а',
  mode: {
    weekday: {
      start: '16:00',
      end: '20:00',
    },
    free: {
      start: '10:00',
      end: '22:00',
    },
  },
  stylebook: {
    mainColor: '#FFC633',
    secondColor: '#5DD1B7',
    opacity: '0.24',
    pattern: 'morphing',
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
      src: 'https://static.sobaka.ru/images/image/00/59/74/82/_normal.jpg?v=1429619597',
    },
    {
      id: 2,
      alt: 'Фото заведения',
      src: 'https://maralin.ru/img/catalog_covers/4398-16432099690.jpg',
    },
    {
      id: 3,
      alt: 'Фото заведения',
      src: 'https://static.tildacdn.com/tild3464-3261-4430-b733-316465633261/Bar_.jpg',
    },
    {
      id: 4,
      alt: 'Фото заведения',
      src: 'https://p2.zoon.ru/preview/dkur5IstXzsZ9wELwXBUEA/640x427x85/1/8/6/original_64f1a3b7524380a9f9035998_6525257a48e060.49943543.jpg',
    },
    {
      id: 5,
      alt: 'Фото заведения',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfijJ8cg6-vR0PRejQyEINIaA6562VAOT3Rw&s',
    },
  ],
};

module.exports = novin
