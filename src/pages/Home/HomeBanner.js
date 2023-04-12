import React from 'react';
import bannerImg from '../../assets/All Images/P3OLGJ1 copy 1.png'

const HomeBanner = () => {
    return (
        <div style={{backgroundColor:'faf8ff'}}>
            <div className='container pb-5'>
              <div className='row'>
              <div className='col-md-5 col-12 d-flex justify-content-center align-items-center'>
                    <div>
                    <h1 className='fw-bold'>One Step <br /> Closer To Your <br /> <span className='text-primary'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div className="btn btn-primary fw-bold">Get Started</div>
                    </div>
                </div>
                <div className='col-12 col-md-7 '>
                    <img className='img-fluid' src={bannerImg} alt="" />
                </div>
              </div>
            </div>
        </div>
    );
};

export default HomeBanner;