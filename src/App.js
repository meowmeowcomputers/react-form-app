import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyForm from './myform';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';
const theme = getMuiTheme({
  palette: {primary1Color: red700}
});


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //   </div>
      //
      // </div>
      <MuiThemeProvider muiTheme={theme}>
          <MyForm/>
      </MuiThemeProvider>
    );
  }
}

export default App;
