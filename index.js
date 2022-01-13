/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Screen1 from './src/Screen1'
import Login from './src/baitap/login/Login'
AppRegistry.registerComponent(appName, () => Login);
