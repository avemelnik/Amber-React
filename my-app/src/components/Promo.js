import React, { Component } from 'react';

export default class Promo extends Component {
    render() {
        return (
            <div className="Promo">
                <section className="section-promo">
                    <div className="container title-and-text promo-width text-center justify-content-center d-flex flex-column">
                        <header>
                            <h3>Steal of the month</h3>
                            <p>That we can tuck in our children at night and know that they are fed and clothed and safe from harm. Our
                                trials and triumphs became at once unique and universal.
                                , black and more than black.</p>
                        </header>
                        <div className="f-flex justify-content-center">
                            <button type="button" className="my-btn my-empty-btn">purchase now</button>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}