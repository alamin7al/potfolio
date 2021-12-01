import React from 'react';
import './category.css'
const Category = ({filter}) => {
    return (
        <div className='button my-3'>
            
            <button className='btn btn-outline-success btn-lg ms-4 fs-5 ' onClick={()=>filter('health')}>health</button>
            <button className='btn btn-outline-success btn-lg ms-4 fs-5 ' onClick={()=>filter('all')}>all</button>
            <button className='btn btn-outline-success btn-lg ms-4 fs-5 ' onClick={()=>filter('travel')}>travel</button>
            <button className='btn btn-outline-success btn-lg ms-4 fs-5 ' onClick={()=>filter('cycale')}>cycale</button>
        </div>
    );
};

export default Category;