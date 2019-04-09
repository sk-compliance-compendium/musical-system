import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers:{
                Authorization: 'Client-ID 1e1d81bf442f12ed735dea22c56332ae1a9d1955eb2d8120e3ac539228c6416b'
            }
        });

        console.log(response.data.results);
    }
    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;