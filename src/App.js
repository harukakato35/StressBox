import React from 'react';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Top from './components/Top';
import { ConnectedRouter } from 'connected-react-router';
import {history} from './configureStore';

const App = () => {
    return (
        <React.Fragment>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={Top}/>
                </Switch>
            </ConnectedRouter>
        </React.Fragment>
    )

}
export default App;
