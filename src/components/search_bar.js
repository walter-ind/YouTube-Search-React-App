import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term:'Enter the term'};    // state property of class based component works as placeholder => a benefit of 'state' //
    }

    render(){
        return(
            <div>
               <input
                value = {this.state.term};
               onChange = {(event)=>{this.setState({term:event.target.value})}};
               />
            </div>
        );
    }

}

export default SearchBar;