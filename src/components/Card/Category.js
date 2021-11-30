import React from 'react';
import './category.css'
const Category = ({filter}) => {
    return (
        <div className='button mt-3'>
            
            <button className='btn btn-outline-dark ms-4' onClick={()=>filter('health')}>health</button>
            <button className='btn btn-outline-dark ms-4' onClick={()=>filter('all')}>all</button>
            <button className='btn btn-outline-dark ms-4' onClick={()=>filter('travel')}>travel</button>
            <button className='btn btn-outline-dark ms-4' onClick={()=>filter('cycale')}>cycale</button>
        </div>
    );
};

export default Category;