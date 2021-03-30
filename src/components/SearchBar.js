import React from 'react';

class SearchBar extends React.Component {
    
    state={
        SearchText:''
    };
    onFormSubmit=(e)=>{
     e.preventDefault();
     this.props.onSubmit(this.state.SearchText);
    }
    render(){
       return <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
              <label>Image Search </label>
                <input type="text" value={this.state.SearchText} 
                onChange={(e)=> {this.setState({SearchText:e.target.value})}}></input>
               </div>
            </form>
        </div>
    }
}
export default SearchBar;