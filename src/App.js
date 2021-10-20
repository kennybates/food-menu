import React, { useState } from 'react';
import data from './data';
import Menu from './Menu';
import Categories from './Categories';

// Get Unique Categories from list
// Using Set data structure to find unique values
const allCategories = ['all', ...new Set(data.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(data); // state value - menuItems
  const [categories, setCategories] = useState(allCategories); // state value - categories

  // filter function
  const filterItems = (category) => {
    // Condition for all category
    if (category === 'all') {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
