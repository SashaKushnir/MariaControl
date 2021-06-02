import React from 'react';
import './App.css';
import CarSpacess, {CarSpaces} from "./components/CarSpaces/CarSpaces";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

export const App = () => {
    return (
        <div className="App">
            <CarSpaces/>
            <CarSpacess/>
        </div>
    );
}

export const AppWrapper = () => {
    return  <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
}