import React from 'react';

class UrlForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {url: ''},
            loading: false,
            error: false
        };


    }

    handleSubmit(e) {
        e.preventDefault();
        this.state = {
            data: {url: ''},
            loading: true
        };
        fetch('/shorten', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({url: this.refs.url.value})
        })
            .then(response => response.json())
            // ...then we update the users state
            .then(data => {
                    console.log(data);
                    this.setState({
                        data: data,
                        isLoading: false,
                        error: false
                    });
                }
            )
            // Catch any errors we hit and update the app
            .catch(error => this.setState({error, isLoading: false}));


    }

    render() {
        let {url} = (this.state.data);
        let {error, loading} = this.state;
        console.log(url);
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <form id="form_shorten" role="form" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="input-group">
                                <input ref="url" type="url" className="form-control text-url"
                                       placeholder="Enter a URL to shorten..."
                                       defaultValue="https://google.com"/>
                                <span className="input-group-btn">
                        <button type="submit" className="btn btn-success btn-shorten">Shorten</button>
                    </span>
                            </div>
                        </form>
                        <br/>
                        {(url) ?
                            <div id="shorten_area" className="hide">Shortened URL: <a href={url}
                                                                                      target="_blank">{url}</a><span
                                className="shortened-url"></span></div> : ``}
                        {(error) ? <div className="alert alert-danger" role="alert">
                                URL invalid!
                            </div>
                            : ''}
                    </div>


                </div>
            </div>

        );
    }
}

export default UrlForm;