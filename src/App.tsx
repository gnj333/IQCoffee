import { GlobalStyle } from 'shared/globalStyles';

import { Container } from './widgets/styled';
import { ShopPage } from './pages/shopListPage/shopPage/ShopPage';


const App = () => (
  <div className="App">
    <GlobalStyle />
    <Container>
      <ShopPage />
    </Container>
  </div>
);

export default App;
