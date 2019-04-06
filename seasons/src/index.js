import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        };
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage }</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return (
            <div className="ui active inverted dimmer">
                <div className="ui large text loader">Loading</div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);