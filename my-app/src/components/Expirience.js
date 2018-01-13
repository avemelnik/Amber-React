import React, { Component } from 'react';


export default class Expirience extends Component {
    render() {
        return (
            <div className="Expirience">
                <section className="expirience d-flex justify-content-center align-content-center align-items-center">
                    <div className="container">
                        <header>
                            <h3 className="text-color-white text-center">Company expirience</h3>
                        </header>
                        <ul className="row exp">
                            <li className="col-12 col-lg-4 text-color-white">
                                <div className="fon-circle"><i className="fa fa-cogs"></i></div>
                                <p className="text-center">500</p>
                                <p className="text-center">years of web development</p>
                            </li>
                            <li className="col-12 col-lg-4 text-color-white">
                                <div className="fon-circle d-flex hustify-content-center"><i className="fa fa-phone"></i></div>
                                <p className="text-center">25 000</p>
                                <p className="text-center">results of the last
                                    winter yea</p>
                            </li>
                            <li className="col-12 col-lg-4 text-color-white">
                                <div className="fon-circle"><i className="fa fa-rocket"></i></div>
                                <p className="text-center">100000</p>
                                <p className="text-center">euros of the military budget</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

        );
    }
}
