// Import the React & ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click on Me Yo :-)';
}

// Create a React Component
const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
        </div>
    );
}

// Take the React Component & show it on the screen.
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);