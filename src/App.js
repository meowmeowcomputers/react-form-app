import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Link, Switch}
  from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyForm from './myform';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';
const theme = getMuiTheme({
  palette: {primary1Color: red700}
});


const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

const Home = () => (<h2>Home</h2>)


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //   </div>
      //
      // </div>
      <Provider store={store}>
        <MuiThemeProvider muiTheme={theme}>
          <div>

            <BrowserRouter>
              <div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/form">Form</Link></li>
                </ul>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/form" component={MyForm}/>
                  <Route component={NoMatch}/>
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </Provider>

    );
  }
}

export default App;
