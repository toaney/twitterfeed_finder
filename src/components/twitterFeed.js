import React from 'react'; 
import { connect } from 'react-redux';
import { getTwitterStatuses} from '../actions/twitterFeedAction';
import Filter from "./filter"

const TwitterFeed = ({dispatch, statuses, handle}) => {

    React.useEffect(() => {
        dispatch(getTwitterStatuses())
        //dispatch(streamHandleStatuses())
        // to-do: wire up streaming so new tweets update page via WebSocket
    }, []);

    return(
        <React.Fragment>
            <h3 className="feed-title">Tweets</h3>
            {handle && <p className="list-filter-info">Showing tweets by: {handle}</p>}
            {/* to-do: dynamically show counter for the number of tweets displayed */}
            <div className="filter-container">
                <Filter/>
            </div>
            <div>
                {/* to-do: add timestamp/handle and image to each status item */}
                {statuses.map( item => (
                    <p>{item}</p>
                ))}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return({
        statuses: state.twitterFeedReducer.statuses,
        keyword: state.twitterFeedReducer.keyword,
        handle: state.twitterFeedReducer.handle
    })    
}

export default connect(mapStateToProps)(TwitterFeed);