import React, { Component } from 'react';
import map from '../img/map.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <footer className="main-footer text-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-3 get-in-touch">
                                <h5 className="text-center">Get in touch</h5>
                                <ul className="get-in">
                                    <li><span className="text-color-white">Address:</span> <span className="text-color-grey">321 Street Name, United Kingdom, London</span>
                                    </li>

                                    <li><span className="text-color-white">Phone:</span><span
                                        className="text-color-grey"> +7 998 71 150 30 20</span></li>

                                    <li><span className="text-color-white">Email:</span> <span
                                        className="text-color-grey">info@ambertheme.com</span></li>

                                    <li><img src={map}/></li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-3 latest-tweets">
                                <h5 className="text-center">Latest tweets</h5>
                                <ul className="tweets">
                                    <li><span className="text-color-white">CMS Masters And Their Best Web Design Tools</span><span
                                        className="text-color-green"> #bestwebdesigntools #webdesign</span>
                                        <span className="text-color-grey">— about 12 min ago</span></li>

                                    <li><span className="text-color-white">WOOCOMMERCE functionality added!!! See Industrial theme become even powerful!</span><span
                                        className="text-color-green"> - bit.ly/industrial-wp</span>
                                        <span className="text-color-grey">— about 47 days ago</span>
                                    </li>

                                    <li><span className="text-color-white">CMS Masters And Their Best Web Design Tools</span><span className="text-color-green">#bestwebdesigntools #webdesign</span>
                                        <span className="text-color-grey">— about 12 min ago</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-3 follow-us">
                                <h5 className="text-center">Follow us</h5>
                                <ul className="follow">
                                    <li><a href="">Like us on Facebook</a></li>
                                    <li><a href="">Follow us on Twitter</a></li>
                                    <li><a href="">Watch videos on YouTube</a></li>
                                    <li><a href="">Friend us on Instagram</a></li>
                                    <li><a href="">Repin on Pinterest</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-3 popular-post">
                                <h5 className="text-center">Popular post</h5>
                                <ul className="popular">
                                    <li>September, 30
                                        <p className="text-color-green">Candy canes dragée pudding. Donut cheesecake I love chocolate icing</p>
                                    </li>
                                    <li>April, 22
                                        <p className="text-color-green">Muffin croissant cookie sesame snaps. Ice cream donut cookie gingerbread</p>
                                    </li>

                                    <li>May, 12
                                        <p className="text-color-green"> Cotton candy muffin tart gummies candy danish liquorice chupa chups tootsie roll</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom d-flex flex-row justify-content-between align-items-center">
                            <p>© 2014 StylemixThemes. All rights reserved.
                                Powered by WordPress.</p>
                            <button className="my-btn my-empty-btn" type="button"><a href="#" className="text-color-green">Back to top of page</a></button>
                        </div>
                    </div>
                </footer>
            </div>
                );
                }
                }