import React, { Component } from 'react'


class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <form action="http://localhost:5000/results" method="GET">
                    <input type="text" name="results" className="search" placeholder="Search by city, county, or postal code" />
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}







export default SearchBar
