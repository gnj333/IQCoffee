import ReactDOM from 'react-dom/client';

import { appStarted } from '@/shared/routes';

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <App />
);
appStarted();
