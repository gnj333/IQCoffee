export interface ShopItem {
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
  item: ShopItem;
  key?: string;
  // onClick?: unknown;
  isOpen?: boolean;
}

export interface Shops {
  shops: ShopItem[];
}

export interface CategoryItem { 'id': number;
  'category': string;
  'icon': string;
  'name': string;
  'lists': [
    {
      'id': number;
      'name': string;
      'items': [
        {
          'name': string;
          'icon': string;
          'slug': string;
          'price': string;
        }
      ];
    }
  ];}
export interface Shop {
  'categories': {
    [key: string]: CategoryItem;

  };
  'shop': {
    'name': string;
    'slug': string;
    'address': string;
    'mode': {
      'weekday': {
        'start': string;
        'end': string;
      };
      'free': {
        'start': string;
        'end': string;
      };
    };
    'stylebook': {
      'mainColor': string;
      'secondColor': string;
      'opacity': string;
      'pattern': string;
    };
    'categories': [
      {
        'id': number;
        'category': string;
        'icon': string;
        'name': string;
      }
    ];
    'photos': [
      {
        'id': number;
        'alt': string;
        'src': string;
      }
    ];
  };
}

export interface Categories {
  'id': number;
  'category': string;
  'icon': string;
  'name': string;
}

export interface Item {
  name: string;
  icon: string;
  slug: string;
  price: string;
}

export interface List {
  id: number;
  name: string;
  items: Item[];
}

export interface Lists {
  id: number;
  name: string;
  lists: List[];
}
