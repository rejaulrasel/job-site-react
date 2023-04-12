import React, { useEffect, useState } from 'react';
import HomeSigleJobDetails from './HomeSigleJobDetails';

const HomeJobs = () => {
    const [homeJobs, setHomeJobs] = useState([])
    console.log(homeJobs)
    useEffect( () => {
        fetch('./jobs.JSON')
        .then(res => res.json())
        .then(data => setHomeJobs(data))
    },[])
    return (
        <div className='container'>
            <div className='text-center mt-5'>
                <h1 className='fw-bold'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="row g-5">
                {
                    homeJobs.slice(0,4).map(homeJob => 
                        <HomeSigleJobDetails
                        key={homeJob?.id}
                        homeJob={homeJob}/>
                    )
                }
            </div>
        </div>
    );
};

export default HomeJobs;