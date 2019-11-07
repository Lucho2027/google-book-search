import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterPrint: '',
      bookType: '',
      books: [],

    };
  }

  changeFilterPrint(e) {
    this.setState({
      filterPrint: e.target.value
    })
    this.updateSearchTerm(this.state.searchTerm)
  }

  changeBookType(e) {
    this.setState({
      bookType: e.target.value
    })
    this.updateSearchTerm(this.state.searchTerm)
  }

  updateSearchTerm(term) {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyBF90a3f0Ck5LAr2wo9lhPgPuWUy1VAIiU`;
   if(this.state.filterPrint){
     url = url + `&printType=${this.state.filterPrint}`
   }
   if(this.state.bookType){
     url = url + `&filter=${this.state.bookType}`
   }
    this.setState({
      searchTerm: term
    })

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items,
          error: null
        });
        
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }


  render() {
    
    return (
      <div className='App'>
        <div className="App__heading">
          <h1>Google Book Search</h1>
        </div>
        <SearchBar searchTerm={this.state.searchTerm}
          handleUpdate={term => this.updateSearchTerm(term)}
          handleChangeFilterPrint={filterPrint => this.changeFilterPrint(filterPrint)}
          handleChangeBookType={bookType => this.changeBookType(bookType)} />
        <BookList books={this.state.books} />
      </div>
    );
  }

}

export default App;