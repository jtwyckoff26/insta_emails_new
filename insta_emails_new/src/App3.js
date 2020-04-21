import './App.css';
import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import MainUsers from './components/MainUsers';
import MainTags from './components/MainTags';
import Home from './components/Home';

    function App() {
        return (
            <HashRouter basename="/">
                <div>
                    <Route exact path="/" render={props => <Home {...props} />} /> 
                    <Route exact path="/users" render={props => <MainUsers {...props} />} /> 
                    <Route exact path="/tags" render={props => <MainTags {...props} />} />
                </div>
            </HashRouter>
        );
}

export default App;