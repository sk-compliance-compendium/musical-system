// Import the React & ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
    return <div>Hi There Yo! :)</div>;
}

// Take the React Component & show it on the screen.
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);