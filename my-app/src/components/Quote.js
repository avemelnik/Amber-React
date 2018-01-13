import React, { Component } from 'react';
import firstCarItem from '../img/1.jpg';
import secondCarItem from '../img/2.jpg';
import thirdCarItem from '../img/3.jpg';
import fourthCarItem from '../img/4.jpg';
import fifthCarItem from '../img/5.jpg';


export default class Quote extends Component {
    render() {
        return (
            <div className="Quote">
                <section className="quote">
                    <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators1" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid w-100" src={firstCarItem} width="1680" height="450" alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid w-100" src={secondCarItem} width="1680" height="450"
                                     alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid w-100" src={thirdCarItem} width="1680" height="450" alt="Third slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid w-100" src={fourthCarItem} width="1680" height="450"
                                     alt="Fourth slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src={fifthCarItem} width="1680" height="450" alt="Fifth slide"/>
                            </div>
                            <div className="carousel-caption d-none d-md-block m-auto">
                                <h4>Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at
                                    considerable distances and with no small facility.</h4>
                                <p className="text-color-green">— Moby-Dick, Herman Melville</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

    );
    }
    }