import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h2>Yngen exam - REST API to URL Shortener web application page</h2>
                </div>
                <form id="form_shorten" role="form">
                    <div className="input-group">
                        <input type="url" className="form-control text-url" placeholder="Enter a URL to shorten..."
                               value="https://google.com"/>
                        <span className="input-group-btn">
                        <button type="submit" className="btn btn-success btn-shorten">Shorten</button>
                    </span>
                    </div>
                </form>
                <br/>
                <div id="shorten_area" className="hide">Shortened URL: <span className="shortened-url"></span>
                </div>
            </div>
        );
    }
}

export default App;