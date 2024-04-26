// DataList.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItems, addItem, editItem, deleteItem } from './actions';

const Table1 = ({ items, loading, error, fetchItems, addItem, editItem, deleteItem }) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleAddItem = () => {
    const newItemTitle = prompt('Enter new item title:');
    if (newItemTitle) {
      addItem(newItemTitle);
    }
  };

  const handleEditItem = (itemId, currentTitle) => {
    const newTitle = prompt('Enter new title:', currentTitle);
    if (newTitle !== null) {
      editItem(itemId, newTitle);
    }
  };

  const handleDeleteItem = (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(itemId);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="text-center">
      <h1 className="text-center text-xl mt-4">React developer assignment</h1>
      <button className='mt-3 bg-green-200 p-3 border-2 border-green-300 rounded-md' onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li className='m-1' key={item.id}>
            {item.title} <br></br>
            <button className='bg-blue-300 p-3 rounded-md m-1' onClick={() => handleEditItem(item.id, item.title)}>Edit</button>
            <button className='bg-blue-300 p-3 rounded-md m-1' onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = {
  fetchItems,
  addItem,
  editItem,
  deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Table1);
