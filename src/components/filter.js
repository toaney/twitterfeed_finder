import React from 'react';
import { connect } from 'react-redux';
import { updateStatuses } from '../actions/twitterFeedAction';
// import { searchHandle } from '../actions/listMoviesAction';
// to-do: bugfix- site fails when filtering the same results twice

const Filter = ({dispatch, statuses}) => {
    const [ keywordFilter, setKeywordFilter ] = React.useState("");
    // const [ filteredList, setFilteredList ] = React.useState([]);
    // to-do: dynamically display keyword filters currently in use

    const filterResults = () => {
        let filteredResults = statuses.map( item => {
            let text = item.toUpperCase()
            let key = keywordFilter.toUpperCase()
            if (text.includes(key)){
                return item
            }
        })
        dispatch(updateStatuses(filteredResults))
    }

    return(
        <div className="filterbar">
            <div className="filter-input-container">
                <input 
                    className="filter-input" 
                    placeholder="keyword"
                    value={keywordFilter} 
                    onChange={(e) => {
                        setKeywordFilter(e.target.value)
                }}></input>
                <button className="filter-button" onClick={() => {
                    filterResults()
                    setKeywordFilter("")
                }}>Filter</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return({
        statuses: state.twitterFeedReducer.statuses,
        keyword: state.twitterFeedReducer.keyword,
        handle: state.twitterFeedReducer.handle
    })    
}

export default connect(mapStateToProps)(Filter);