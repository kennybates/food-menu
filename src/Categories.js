import React from 'react';

const Categories = ({filterItems, categories}) => { // destructured objects pased
    
    // Map through categories to create dynamic buttons
    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return (
                <button 
                    type='button' 
                    className='filter-btn' 
                    key={index} 
                    onClick={()=> filterItems(category)}>
                    {category}
                </button>
                );
            })}
        </div>
    );
};

export default Categories;