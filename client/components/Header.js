import React from 'react';


class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar bg-primary">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand text-white" href="#">Yngen exam - REST API to URL Shortener web
                                application
                                page</a>
                        </div>


                    </div>

                </nav>
                <div className="jumbotron">
                    <div className="card">
                        <div className="card-body">
                            <h5>REST API to URL Shortener

                                Development Task for node.js

                            </h5>
                            <p>This example is a quick exercise to illustrate how the default, static navbar and fixed
                                to top
                                navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport
                                and
                                device.</p>
                            <p>

                            </p>
                            <b>Tasks Done:</b>
                            <ul>

                                <li><input type="checkbox" readOnly checked="checked" className="form-check-input"/>
                                    <label className="form-check-label">Provide a project that can easily be built and
                                        tested.</label>

                                </li>
                                <li>
                                    <input type="checkbox" readOnly checked="checked" className="form-check-input"/>
                                    <label className="form-check-label">Include at least a simple web page to allow
                                        testing the API.</label>
                                </li>
                                <li>
                                    <input type="checkbox" readOnly checked="checked" className="form-check-input"/>
                                    <label className="form-check-label">Use ES6.</label>
                                </li>
                                <li>
                                    <input type="checkbox" readOnly checked="checked" className="form-check-input"/>
                                    <label className="form-check-label">Make sure to wrap the functionality of
                                        communicating with bitly, in a class.</label>

                                </li>
                                <li>
                                    <input type="checkbox" readOnly checked="checked" className="form-check-input"/>
                                    <label className="form-check-label">When using packages focus on promise-based
                                        packages and not callback-based packages.</label>
                                </li>
                                <li>
                                    <input type="checkbox" readOnly checked="checked" className="form-check-input"/>
                                    <label className="form-check-label">Feel free to use npm packages for whatever you
                                        need and prefer.</label>

                                </li>
                                <li>
                                    <input type="checkbox" readOnly checked="checked" className="form-check-input"/>
                                    <label className="form-check-label">Readability of the code and commenting will be
                                        taken into account.</label>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;