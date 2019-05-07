import React from 'react';
import UrlForm from './UrlForm';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h2>Yngen exam - REST API to URL Shortener web application page</h2>
                </div>
                <UrlForm/>
            </div>
        );
    }
}

export default App;