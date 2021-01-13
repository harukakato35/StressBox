import React, { Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './Firebase/firebaseConfig';
import ReactDOM from 'react-dom';
import App from './App'
import Header from './components/BasicComponents/Header'
import { Provider } from 'react-redux';
import configureStore from './configureStore';
const store = configureStore();



ReactDOM.render(
<Provider store={store}>
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<h3>Loading...</h3>}>
      <React.StrictMode>
        <Header/>
        <App />

          </React.StrictMode>
        </Suspense>
      </FirebaseAppProvider>,
    </Provider>,
document.getElementById('root')
);
