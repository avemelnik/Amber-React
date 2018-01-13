import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, hashHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import './style/style.css';
//import './include/bootstrap'
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import Header from './components/Header';
// import Welcome from './components/Welcome';
// import Promo from './components/Promo';
// import Works from './components/Works';
// import Attention from './components/Attention';
// import Features from './components/Features';
// import Quote from './components/Quote'
// import Blog from './components/Blog'
// import Expirience from './components/Expirience'
// import Team from './components/Team'
// import Footer from './components/Footer'


import App from './App';

import registerServiceWorker from './registerServiceWorker';



//ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<Welcome/>т, document.getElementById('welcome'));
// ReactDOM.render(<Promo/>, document.getElementById('promo'));
// ReactDOM.render(<Works/>, document.getElementById('works'));
// ReactDOM.render(<Attention/>, document.getElementById('att'));
// ReactDOM.render(<Features/>, document.getElementById('feat'));
// ReactDOM.render(<Quote/>, document.getElementById('quote'));
// ReactDOM.render(<Blog/>, document.getElementById('blog'));
// ReactDOM.render(<Expirience/>, document.getElementById('exp'));
// ReactDOM.render(<Team/>, document.getElementById('team'));
// ReactDOM.render(<Footer/>, document.getElementById('footer'));

registerServiceWorker();
