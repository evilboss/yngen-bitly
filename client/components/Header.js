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
                            <ul>
                                <li><span>Provide a project that can easily be built and tested.</span>
                                </li>
                                <li><span>Include at least a simple web page to allow testing the API.</span></li>
                                <li><span>Use ES6.</span></li>
                                <li>
                                    <span>Make sure to wrap the functionality of communicating with bitly, in a class.</span>
                                </li>
                                <li>
                                    <span>When using packages focus on promise-based packages and not callback-based packages.</span>
                                </li>
                                <li><span
                                >Feel free to use npm packages for whatever you need and prefer.</span></li>
                                <li><span>Readability of the code and commenting will be taken into account.</span>
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