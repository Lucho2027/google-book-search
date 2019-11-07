import React, { Component } from 'react';


class FilterOptions extends Component {

    render() {

        return (
            <div className="Book_Type_selector">
                <form>
                    <label htmlFor="BookType">Book Type: </label>
                    <select
                    onChange={this.props.filterOptionBookType}
                        id="BookType"
                        name="BookType"
                    >
                        <option value="">Select one...</option>
                        <option value="partial">Partial</option>
                        <option value="full">Full</option>
                        <option value="free-ebooks">Free ebooks</option>
                        <option value="paid-ebooks">Paid ebooks</option>
                        <option value="ebooks">Ebooks</option>


                    </select>
                    <label htmlFor="PrintType">Print Type: </label>
                    <select
                    onChange={this.props.filterOptionPrint}
                        id="PrintType"
                        name="PrintType"
                    >
                        <option value="">Select one...</option>
                        <option value="All">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                        


                    </select>
                </form>
            </div>
        );
    }
}



export default FilterOptions;