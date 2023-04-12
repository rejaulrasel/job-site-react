import React from 'react';

const JobCategoryList = () => {
    return (
        <div className='container py-5'>
            <div className='text-center mt-5'>
                <h1 className='fw-bold'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="row mt-5">
                <div className="col-6 col-md-3 bg-gradient">
                    <div className="card" >
                        <div className="d-flex mt-2 justify-content-center"><img src="https://i.ibb.co/6sXTWQ0/1.png" className="img-fluid w-25     " alt="..." /></div>
                        <div className="card-body mt-2">
                            <h5 className="card-title fw-bold">Account & Finance</h5>
                            <p className="card-text">300 jobs available.</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 bg-gradient">
                    <div className="card" >
                        <div className='d-flex justify-content-center mt-2'>
                        <img src="https://i.ibb.co/3RmZ2PQ/2.png
                        " className="img-fluid w-25" alt="..." />
                        </div>
                        <div className="card-body mt-2">
                            <h5 className="card-title fw-bold">Creative Design</h5>
                            <p className="card-text">100+ jobs available.</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 bg-gradient">
                    <div className="card" >
                       <div className='d-flex justify-content-center mt-2'> <img src="https://i.ibb.co/SKRX3rY/3.png" className="img-fluid w-25     " alt="..." /></div>
                        <div className="card-body mt-2">
                            <h5 className="card-title fw-bold">Marketing & Sales</h5>
                            <p className="card-text">300 jobs available.</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 bg-gradient">
                    <div className="card" >
                       <div className='d-flex justify-content-center mt-2'> <img src="https://i.ibb.co/rsnFZ8t/4.png" className="img-fluid w-25     " alt="..." /></div>
                        <div className="card-body mt-2">
                            <h5 className="card-title fw-bold">Engineering Job</h5>
                            <p className="card-text">300 jobs available.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobCategoryList;