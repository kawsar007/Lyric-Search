import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Component/layout/Navbar';
import Index from './Component/layout/Index';
import { Provider } from './Context';
import Lyrics from './Component/Tracks/Lyrics';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Provider>
                <Router>
                    <React.Fragment>
                    <Navbar/>
                    <div className="container">
                        <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route exact path="/lyrics/track/:id" component={Lyrics}/>
                        </Switch>
                    </div>
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;