import React, { useState } from 'react';
import data from './data';
import Menu from './Menu';
import Categories from './Categories';

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([]);

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
        <Categories filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
