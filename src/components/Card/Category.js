import React from 'react';
import './category.css'
const Category = ({ filter }) => {
    return (
        <div className='button ssss mt-5'>

            <div className='text-center mt-5 ssss'>
                <button className='btn btn-outline-success btn-lg ms-4 fs-5 ' onClick={() => filter('health')}>health</button>
                <button className='btn btn-outline-success btn-lg ms-4 fs-5 ' onClick={() => filter('all')}>all</button>
                <button className='btn btn-outline-success btn-lg ms-4 fs-5 ' onClick={() => filter('travel')}>travel</button>
                <button className='btn btn-outline-success btn-lg ms-4 fs-5 ' onClick={() => filter('cycale')}>cycale</button>
            </div>
        </div>
    );
};

export default Category;