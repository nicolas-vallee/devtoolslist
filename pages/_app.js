import { Provider } from 'next-auth/client';

import '../styles/globals.css';
import '../styles/mvp.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
