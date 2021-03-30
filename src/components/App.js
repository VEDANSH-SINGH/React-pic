   
import React from 'react';
import SearchBar from './SearchBar'
import axios from 'axios';
import ImageList from './ImageList';
class App extends React.Component {
    state={
        images:[]
    };

   onSearchSubmit= async(SearchText)=>{
    
       const response= await axios.get('https://api.unsplash.com/search/photos',{
           params:{query:SearchText},
         headers: {
             Authorization:'Client-ID 4JBxnU4LbXyYnVs50sFR26C_IIO7AdWzcw88f-cCw3Q'
         }
       });
       this.setState({images:response.data.results})
    }

  render(){ return(
         <div className="ui container" style={{ marginTop:"10px"
         }}>
             <SearchBar onSubmit={this.onSearchSubmit}/>
             Found:{this.state.images.length} images
             <ImageList images={this.state.images}/>
          </div>
    )
}}
export default App;