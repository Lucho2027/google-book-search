import React, { Component } from 'react';



class SearchBox extends Component {

    onSubmit = (e) => {
        e.preventDefault()
        this.props.handleUpdate(e.target.searchTerm.value)
    }


    render() {
        return (
            <div className="SearchBox">
                <form
                    onSubmit={this.onSubmit}>
                    <legend>Search:</legend>
                    <input name="searchTerm" placeholder="Search Book"
                    />
                    <button >Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBox;
