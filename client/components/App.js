import React from 'react';
import Header from './Header';
import UrlForm from './UrlForm';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <UrlForm/>
                </div>

            </div>
        );
    }
}

export default App;