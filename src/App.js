import React, { Suspense } from 'react';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Top from './components/Top';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import  MyPage from './components/MyPage';
import SignIn from './components/SignIn';
import ShippingInfo from './components/ShippingInfo';
import { ConnectedRouter } from 'connected-react-router';
import {history} from './configureStore';
import { Provider } from 'react-redux'
import {configureStore} from './configureStore';

const store = configureStore();

const App = () => {


    return (
        <React.Fragment>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={Top}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/signup" component={SignUp}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/signin" component={SignIn}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/mypage" component={MyPage}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/mypage/shippinginfo" component={ShippingInfo}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/top" component={Top}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </React.Fragment>
    )

}
export default App;
