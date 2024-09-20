import React from 'react';


import { Shops } from '@/widgets';

import { ShopsHeader } from '../shopsHeader/ShopsHeader';
import { Footer } from '../footer/footer';


export const ShopPage = () => (
  <>
    <ShopsHeader />
    <Shops />
    <Footer />
  </>
);
