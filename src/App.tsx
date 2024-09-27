
import { RouterProvider } from 'atomic-router-react';

import { Pages } from '@/pages';
import { route } from '@/shared/routes';

import { GlobalStyle } from './shared';
import { Container } from './widgets/shops/styled';


const App = () => (
  <div className="App">
    <GlobalStyle />
    <Container>
      <RouterProvider router={ route }>
        <Pages />
      </RouterProvider>
    </Container>
  </div>
);

export default App;
