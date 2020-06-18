import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import "./App.css";
import NavBar from "./components/Nav";
import FirstContainer from "./components/FirstContainer";
import { Footer } from "./components/Footer";
import { ContainerCarousel } from "./components/ContainerCarousel";
import { Containerbg } from "./components/Containerbg";
import { ValidatedLoginForm } from "./components/ValidatedLoginForm";
import reducer from "./reducers/index";

const reducers = combineReducers({
  reducer,
});
const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="header-img">
          <Containerbg />
        </div>

        <NavBar />
        <FirstContainer />
        <ContainerCarousel />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
