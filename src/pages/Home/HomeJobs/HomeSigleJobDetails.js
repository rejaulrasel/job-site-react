import React from 'react';
import { GrLocation } from 'react-icons/gr'
import { AiOutlineDollarCircle } from 'react-icons/ai'

const HomeSigleJobDetails = ({ homeJob }) => {
    const { companyLogo, jobTitle, companyName, jobType, jobTime, location, salary } = homeJob;
    return (
        <div className='col-12 col-md-5 card p-4 me-5'>
            <img src={companyLogo} className='w-25' alt="" />
            <h5 className='fw-bold'>{jobTitle}</h5>
            <h6>{companyName}</h6>
            <div className='d-flex '>
                <button className="border border-primary text-primary py-2 px-4 bg-white me-3">{jobType}</button>
                <button className="border border-primary text-primary py-2 px-4 bg-white me-3">{jobTime}</button>
            </div>
            <div className="d-flex my-4">
                <div className='d-flex me-5'>
                    <GrLocation className='mt-1' /><p>{location}</p>
                </div>
                <div className='d-flex'>
                    <AiOutlineDollarCircle className='mt-1' /><p>{salary}</p>
                </div>
            </div>
            <div className="btn btn-primary w-25">View Details</div>
        </div>
    );
};

export default HomeSigleJobDetails;