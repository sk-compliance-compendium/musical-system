import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(error)
    );
    return <div>Hi There Yo :)</div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);