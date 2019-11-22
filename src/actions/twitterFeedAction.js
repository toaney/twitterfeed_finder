import axios from 'axios';

// Action to update statuses in the Redux store
export const updateStatuses = statuses => ({
    type: "UPDATE_STATUSES",
    statuses
});

// Action to update twitter handle in the Redux store
export const updateHandle = handle => ({
    type: "UPDATE_HANDLE",
    handle
});

// Action to update search keyword in the Redux store
export const updateKeyword = keyword => ({
    type: "UPDATE_KEYWORD",
    keyword
});

// Get inital list of public tweets
export const getTwitterStatuses = () => {
    return (dispatch) => {
        return axios
        .get("/tweets?q=dog")
        .then(res => {
            console.log(res)
            let statusArray = res.data.statuses.map( item => {return item.text})
            console.log(statusArray);
            dispatch(updateStatuses(statusArray))
        })
        .catch(console.log) 
    }
};

// Use for streaming tweets
// to-do: wire up stream functionality of new tweets
export const streamHandleStatuses = (statuses) => {
    return (dispatch) => {
        return axios
        .get("/stream")
        .then(res => {
            console.log(res)
            let updated = statuses.concat(res)
            dispatch(updateStatuses(updated))
        })
        .catch(console.log) 
    }
};

// Get tweets by twitter handle
export const userSearch = (keyword) => {
    return (dispatch) => {
        return axios
        .get(`/usertweets?screen_name=${keyword}`)
        .then(res => {
            console.log(res)
            let newArray = res.data.map( item => {return item.text})
            console.log(newArray);
            dispatch(updateStatuses(newArray))
            //dispatch(updateStatuses(res.data.statuses))
        })
        .catch(console.log) 
    }
}