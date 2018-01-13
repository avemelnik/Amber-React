import React, { Component } from 'react';
//import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory"
import Header from './components/Header';
import Welcome from './components/Welcome';
import Promo from './components/Promo';
import Works from './components/Works';
import Attention from './components/Attention';
import Features from './components/Features';
import Quote from './components/Quote'
import Blog from './components/Blog'
import Expirience from './components/Expirience'
import Team from './components/Team'
import Footer from './components/Footer'
import Ellements from './components/Ellements'
import SecondHeader from './components/Second-Header'
import PortfolioGallery from './components/Portfolio-Gallery'
import MainBlog from './components/Main-Blog-Section'
import MainForm from './components/Main-Form'
import Portfolio from './components/Portfolio'


const history = createBrowserHistory();

const Home = () => (
    <Header/>
)

const welcomeSection = () => (
    <Welcome/>
)

const promoSection = () => (
    <Promo/>
)

const worksSection = () => (
    <Works/>
)

const attentionSection = () => (
    <Attention/>
)

const featuresSection = () => (
    <Features/>
)

const quoteSection = () => (
    <Quote/>
)

const blogSection = () => (
    <Blog/>
)

const expirienceSection = () => (
    <Expirience/>
)

const teamSection = () => (
    <Team/>
)

const footerSection = () => (
    <Footer/>
)

const ellementsSection = () => (
    <Ellements/>
)

const secondHeader = () => (
    <SecondHeader/>
)

const portfolioGallery = () => (
    <PortfolioGallery/>
)

const mBlog = () => (
    <MainBlog/>
)

const mForm = () => (
    <MainForm/>
)

const port = () => (
    <Portfolio/>
)

class App extends React.Component {
  render() {
    return (
        <div>
            {/*<Header />*/}
            <BrowserRouter history={history}>
                <div>
                <Route path={"/"} component={Home}/>
                <Route exect path={"/ell"} component={SecondHeader}/>
                <Route exact path={"/ell"} component={Ellements}/>
                    <Route exect path={"/pGallery"} component={SecondHeader}/>
                    <Route exact path={"/pGallery"} component={portfolioGallery}/>
                    <Route exect path={"/mBlo"} component={SecondHeader}/>
                    <Route exect path={"/mBlo"} component={mBlog}/>
                    <Route exect path={"/mBlo"} component={mForm}/>
                    <Route exect path={"/port"} component={SecondHeader}/>
                    <Route exect path={"/port"} component={port}/>


                <Route exact path={"/"} component={welcomeSection}/>
                <Route exact path={"/"} component={promoSection}/>
                <Route exact path={"/"} component={worksSection}/>
                <Route exact path={"/"} component={attentionSection}/>
                <Route exact path={"/"} component={featuresSection}/>
                <Route exact path={"/"} component={quoteSection}/>
                <Route exact path={"/"} component={blogSection}/>
                <Route exact path={"/"} component={expirienceSection}/>
                <Route exact path={"/"} component={teamSection}/>
                <Route path={"/"} component={footerSection}/>
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
