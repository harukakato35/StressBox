import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';


export const rootReducer = history => combineReducers({

    router: connectRouter(history),
});

//history:履歴管理に必要なもの
//connected-react-router:reduxとつなげられる
//..>..>..>みたいなアプリ上での遷移に対応できる

// title: Consultation,
// inquiry: Consultation