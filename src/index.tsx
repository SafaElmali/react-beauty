import ReactDOM from 'react-dom';

import { BeautyProvider } from '../src/components/Provider/BeautyProvider';
import App from './App';

ReactDOM.render(
  <BeautyProvider>
    <App />
  </BeautyProvider>,
  document.getElementById('root'),
);
