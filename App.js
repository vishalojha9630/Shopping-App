import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/appNavigation';
import store from './src/redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};


export default App;
