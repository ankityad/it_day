import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';


import {Router,Route,BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
    <div>
    <Route exact path='/' component={App} />
    <Route path='/Login' component={Login} />
    
    
 
    
    </div>
    </BrowserRouter>,
    document.getElementById('root')
);

