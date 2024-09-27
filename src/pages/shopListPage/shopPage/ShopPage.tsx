import React from 'react';


import { Shops } from '@/widgets';
import { Footer } from '@/shared';

import { ShopsHeader } from '../shopsHeader/ShopsHeader';


export const ShopPage = () => (
  <>
    <ShopsHeader />
    <Shops />
    <Footer />
  </>
);
