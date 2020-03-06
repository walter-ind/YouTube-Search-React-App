import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBark5MFyEOINVnPiYoEmE4BAUvbS-Vvuk';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {videos:[]};
    YTSearch({key:API_KEY, term:'Sachin Tendulkar'},

        (videos)=>{
        this.setState({videos});     // ES6 replacement of {vedios:vedios}
        });
    }
    render(){
        return(
          <div>
              <SearchBar />
          </div>
        );
    }
}