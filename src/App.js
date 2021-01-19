import React, { Suspense } from 'react';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Top from './components/Top';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { ConnectedRouter } from 'connected-react-router';
import {history} from './configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

const App = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();　//Login.jsのreducerを使うため

    return (
        <React.Fragment>
            <ReactReduxFirebaseProvider {...auth}>
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
                                <Route exact path="/signout" component={SignOut}/>
                            </Switch>
                            <Switch>
                                <Route exact path="/top" component={Top}/>
                            </Switch>
                </ConnectedRouter>
            </ReactReduxFirebaseProvider>
        </React.Fragment>
    )

}
export default App;
