import React from 'react';
import logo from './logo.svg';
import LandingPage from "./components/LandingPage";
import './App.css';
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <LandingPage/>
    </div>
    </Provider>
  );
}

export default App;
