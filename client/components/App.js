import React from 'react';
import Header from './Header';
import UrlForm from './UrlForm';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h2></h2>
                </div>
                <Header/>
                <UrlForm/>
            </div>
        );
    }
}

export default App;