import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.jsx'
var mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();

class App extends React.Component {
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <RouteHandler/>
                </div>
            </div>
        );
    }

}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default App;