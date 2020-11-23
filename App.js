/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/components/Home';

import {Provider} from 'react-redux';
import store from './src/redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
    );
  }
}

export default App;
