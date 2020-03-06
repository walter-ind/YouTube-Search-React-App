import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list";
const API_KEY = 'AIzaSyBark5MFyEOINVnPiYoEmE4BAUvbS-Vvuk';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {videos:[]};
    YTSearch({key:API_KEY, term:'surfboards'},

        (videos)=>{
        this.setState({videos});     // ES6 replacement of {vedios:vedios}
        });
    }
    render(){
        return(
          <div>
              <SearchBar />
              <VideoList videos={this.state.videos} />
          </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));