import { combinedReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duraction: '4:05'
        }, {
            title: 'Macarena',
            duraction: '2:30'
        }, {
            title: 'All Star',
            duraction: '3:15'
        }, {
            title: 'I Want It That Way',
            duraction: '1:45'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};