import React from 'react';
import { useDispatch } from 'react-redux';
import { userSearch, updateHandle } from '../actions/twitterFeedAction';
// import { connect } from 'react-redux';

const Search = () => {
    const [ searchInput, setSearchInput ] = React.useState("");
    const dispatch = useDispatch();

    return(
        <div className="searchbar">
            <div className="search-input-container">
                <input 
                    className="search-input" 
                    placeholder="@username"
                    value={searchInput} 
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                }}></input>
                <button className="search-button" onClick={() => {
                    //dispatch(searchMovies(searchInput))
                    dispatch(updateHandle(searchInput))
                    dispatch(userSearch(searchInput))
                    setSearchInput("")
                }}>Search</button>
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return({
//     })    
// }

export default Search;