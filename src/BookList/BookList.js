import React, { Component } from 'react';

import Book from '../Book/Book';

class BookList extends Component {
  render() {
    
    return (
      <div className="bookmarkList">
        {this.props.books.map((book, index)=><Book key={index} {...book}/>)}
       
      </div>
    );
  }
}

BookList.defaultProps = {
  books: []
};

export default BookList;