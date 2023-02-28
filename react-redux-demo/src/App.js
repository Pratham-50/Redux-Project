import React from 'react'
import {Provider} from 'react-redux'
import store from './Redux/Store';
import './App.css';
import CakeContainer from './Components/CakeContainer'
import HooksCakeContainer from './Components/HooksCakeContainer';
import IcecreamContainer from './Components/IcecreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer/>
        <CakeContainer/>
        <IcecreamContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
