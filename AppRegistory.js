// index.js or App.js
import { AppRegistry } from 'react-native';
import App from './App'; // Adjust this import based on your project structure
import { name as appName } from './app.json';

// Register the main component
AppRegistry.registerComponent(appName, () => App);

// Start the app
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('app-root') || document.getElementById('root'),
});
