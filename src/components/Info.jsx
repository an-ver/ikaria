import '../styles/Info.css';
import React, { useState } from 'react';
import FetchData from './FetchData.jsx';

function Info() {
  const { data, isLoading } = FetchData();
  const [selectedItem, setSelectedItem] = useState(null);

  // Assuming `handleClick` is defined in the same component
  // This function remains unchanged as it's not directly causing the issue
  const handleClick = (id) => {
    const item = data.find(item => item.id === id);
    setSelectedItem(item);
  };

  // Function to manually deselect the item
  const handleClose = () => {
    setSelectedItem(null);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {selectedItem ? (
        <div>
          {selectedItem.attributes.pictures && selectedItem.attributes.pictures.length > 1 && (
            <div>
              <h1>{selectedItem.attributes.Name}</h1>
              <p>{selectedItem.attributes.Description}</p>
              <img
                src={selectedItem.attributes.pictures[1].image.attributes.url}
                alt={selectedItem.attributes.pictures[1].description}
              />
              {/* <p>{selectedItem.attributes.pictures[1].description}</p> */}
              {/* Button to close or deselect the item */}
            </div>
          )}
        </div>
      ) : (
        data.map(item => (
          <div key={item.id} onClick={() => handleClick(item.id)}>
            <h1>{item.attributes.Name}</h1>
            <p>{item.attributes.Description}</p>
          </div>
        ))
      )}
    </div>
  );
}
export default Info;