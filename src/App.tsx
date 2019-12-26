import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
