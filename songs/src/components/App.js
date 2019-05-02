import React from 'react';
<<<<<<< HEAD

const App = () => {
    return <div>App Yo :)</div>
=======
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
>>>>>>> release/songs-v1
};

export default App;