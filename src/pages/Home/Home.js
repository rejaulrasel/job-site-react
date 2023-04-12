import React from 'react';
import HomeBanner from './HomeBanner';
import JobCategoryList from './JobCategoryList';
import HomeJobs from './HomeJobs/HomeJobs';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <JobCategoryList/>
            <HomeJobs/>
        </div>
    );
};

export default Home;