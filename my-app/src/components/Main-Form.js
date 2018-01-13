import React, {Component} from 'react';


export default class MainForm extends Component {
    render() {
        return (
            <div className="MainForm">
                <section className="section-form">
                    <div className="container d-flex flex-column">
                        <h4>Add comment</h4>
                        <form>
                            <div className="form-list d-flex-flex-row justify-content-between flex-wrap-wrap">
                                <label>Name<input type="text" cols="30"/></label>
                                <label>Email<input type="email" cols="30"/></label>
                                <label>Website(optonal)<input type="text" cols="30"/></label>
                            </div>
                            <label className="mess w-100">Message<textarea class="w-100"></textarea></label>
                        </form>
                        <div className="d-flex flex-row justify-content-end">
                            <button type="button" className="my-btn my-empty-btn btn-add-comment">Add comment</button>
                        </div>

                        <div className="main-comments" id="comment">
                            <ul className="comments-list">
                                <li>
                                    <div className="commentator">
                                        <div className="d-flex flex-row justify-content-between">
                                            <h5 className="text-color-green">Administrator
                                            </h5>
                                            <a href="#" className="reply">Reply</a>
                                        </div>
                                        <p>
                                            September 17, 2013 @ 1:38 pm
                                        </p>
                                    </div>
                                    <p className="comment">
                                        Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth bitters next
                                        level consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit cornhole, occaecat put a
                                        bird on it single-origin coffee Tonx. Small batch 3 wolf moon ad, adipisicing fap cornhole.
                                    </p>
                                </li>
                                <li>
                                    <div classNae="commentator"><h5 className="text-color-green">Administrator</h5>
                                        <p>
                                            September 17, 2013 @ 1:38 pm
                                        </p>
                                    </div>
                                    <p  className="comment">
                                        Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth bitters next
                                        level consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit cornhole, occaecat put a
                                        bird on it single-origin coffee Tonx. Small batch 3 wolf moon ad, adipisicing fap cornhole.
                                    </p>
                                </li>
                                <li>
                                    <div className="commentator"><h5 className="text-color-green">Administrator</h5>
                                        <p>
                                            September 17, 2013 @ 1:38 pm
                                        </p>
                                    </div>
                                    <p className="comment">
                                        Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth bitters next
                                        level consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit cornhole, occaecat put a
                                        bird on it single-origin coffee Tonx. Small batch 3 wolf moon ad, adipisicing fap cornhole.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

    );
    }
    }