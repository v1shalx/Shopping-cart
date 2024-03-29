//components/SearchComponent.js
import React from 'react';
 
function SearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>T-shirt Hub</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search with Product name..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}
 
export default SearchComponent;