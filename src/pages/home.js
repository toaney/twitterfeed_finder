import React from 'react';
import Search from '../components/search';
import TwitterFeed from '../components/twitterFeed';

const Home = () => {
    return (
        <div className="page">
            <div className="welcome-message">
                <h2>Welcome to the TwitterFeed Finder</h2>
                <p>Search for tweets by twitter handle in the search bar below.</p>
            </div>
            <Search/>
            <TwitterFeed/>
        </div>
    )
}

export default Home;