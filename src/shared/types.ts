export interface item {
  name: string;
  slug: string;
  address: string;
  mode: {
    weekday: {
      start: string;
      end: string;
    };
    free: {
      start: string;
      end: string;
    };
  };
  stylebook: {
    mainColor: string;
    secondColor: string;
    opacity: string;
    pattern: string;
  };
  categories: {
    id: number;
    category: string;
    icon: string;
    name: string;
  }[];
  photos: {
    id: number;
    alt: string;
    src: string;
  }[];
}

export interface ShopsItemProps {
  item: item;
  key?: number;
}
