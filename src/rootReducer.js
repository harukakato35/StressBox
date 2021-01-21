import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

export const rootReducer =(history) => combineReducers({

    router: connectRouter(history),
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

//history:履歴管理に必要なもの
//connected-react-router:reduxとつなげられる
//..>..>..>みたいなアプリ上での遷移に対応できる

// title: Consultation,
// inquiry: Consultation