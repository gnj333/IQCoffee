
import { Pages } from '@/pages';

import { GlobalStyle } from './shared';
import { Container } from './widgets/shops/styled';


const App = () => (
  <div className="App">
    <GlobalStyle />
    <Container>
      <Pages />
    </Container>
  </div>
);

export default App;
