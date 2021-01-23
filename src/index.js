import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import {configureStore} from './configureStore';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useHistory } from "react-router-dom";
import { createFirestoreInstance } from "redux-firestore";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createStore, compose } from "redux";
import { rootReducer } from "./rootReducer";

  const firebaseConfig = {
    apiKey: "AIzaSyAOSBfTj_VQ4byWAAOWDhAsklmZtk2W_iE",
    authDomain: "stresstackle-599d9.firebaseapp.com",
    projectId: "stresstackle-599d9",
    storageBucket: "stresstackle-599d9.appspot.com",
    messagingSenderId: "930013144401",
    appId: "1:930013144401:web:79b25db79f4118359fdf70",
    measurementId: "G-J26Y6MYWV3"
  };

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export const auth = firebase.auth();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>

          <App />

      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
    document.getElementById('root')
    );