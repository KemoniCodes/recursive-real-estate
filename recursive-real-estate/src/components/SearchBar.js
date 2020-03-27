import React, { Component } from 'react'


class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <input type="text" name="search" className="search" placeholder="Search by city, county, or postal code" />
                <i class="fas fa-search"></i>
            </div>
        )
    }
}







export default SearchBar
