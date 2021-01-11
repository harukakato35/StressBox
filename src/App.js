import React from 'react';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Top from './components/Top';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { ConnectedRouter } from 'connected-react-router';
import {history} from './configureStore';

const App = () => {
    return (
        <React.Fragment>
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
            </ConnectedRouter>
        </React.Fragment>
    )

}
export default App;
