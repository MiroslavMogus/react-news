/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { Router, Scene } from 'react-native-router-flux';

import PageOne from './src/PageOne';
import PageTwo from './src/PageTwo';
import Main from './src/main';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/* import Main  from './src/main'
*/

export default class News extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
          <Scene key="main" component={Main} title="NEWS"  initial={true} />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('News', () => News);
