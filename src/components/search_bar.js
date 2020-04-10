import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term:''};    // state property of class based component works as placeholder => a benefit of 'state' //
    }

    render(){
        return(
            <div className="search-bar">
               <input
                value = {this.state.term}
                onChange = {event => this.onInputChange(event.target.value)}
               />
            </div>
        );
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;