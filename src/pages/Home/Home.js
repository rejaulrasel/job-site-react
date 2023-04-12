import React from 'react';
import HomeBanner from './HomeBanner';
import JobCategoryList from './JobCategoryList';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <JobCategoryList/>
        </div>
    );
};

export default Home;