import React from "react";
import '../styles/Panigiria.css';
import CreateMapCard from './CreateMapCard.jsx';
import FetchData from './FetchData.jsx';

function Panigiria() {

    const { data, isLoading } = FetchData();

    if (isLoading) {
        return <div className="loader"></div>
    }
   const displayData = data && data.filter(item => item.attributes.category === 'panigiri-card'); 
    return (
        <div className='panigiria-container'>
            <div className='panigiria-cards'> 
                {displayData
                .map(item => <CreateMapCard key={item.id} data={item} />)}
            </div>
        </div>
       
    );
}

export default Panigiria;