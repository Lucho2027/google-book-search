import React, { Component } from 'react';


class Book extends Component {

    render(){
        
        return(
            <div className="book">
      <div className="book__row">
        <div className="book__title">
         </div>
         
        <h3>{this.props.volumeInfo.title}</h3>
        <h4>Author:{this.props.volumeInfo.authors}</h4>
        
        <img src={this.props.volumeInfo.imageLinks.smallThumbnail} alt='Small Thumbnail of book cover'/>
        <h5>Short description</h5>
        <p>{this.props.volumeInfo.description}</p>
        
      </div>      
     </div>

        );
    }

  


}

export default Book;