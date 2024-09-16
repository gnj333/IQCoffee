import { GlobalStyle } from '@/shared';
import { ShopPage } from '@/pages/shopListPage';

import { Container } from './widgets/styled';


const App = () => (
  <div className="App">
    <GlobalStyle />
    <Container>
      <ShopPage />
    </Container>
  </div>
);

export default App;
