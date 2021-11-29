import React from 'react';
import './category.css'
const Category = ({filter}) => {
    console.log(filter.name);
    return (
        <div className='button mt-3'>
            
            <button className='btn btn-outline-dark bt' onClick={()=>filter('health')}>health</button>
            <button className='btn btn-outline-dark bt' onClick={()=>filter('all')}>all</button>
            <button className='btn btn-outline-dark bt' onClick={()=>filter('travel')}>travel</button>
            <button className='btn btn-outline-dark bt' onClick={()=>filter('cycale')}>cycale</button>
        </div>
    );
};

export default Category;