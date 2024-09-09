import { GlobalStyle } from 'shared/globalStyles';

import { Container } from './widgets/styled';
import { Shops } from './widgets/Shops';


const App = () => (
  <div className="App">
    <GlobalStyle />
    <Container>
      <Shops />
    </Container>
  </div>
);

export default App;
