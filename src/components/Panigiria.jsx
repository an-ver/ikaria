import React from "react";
import '../styles/Panigiria.css';
import CreateMapCard from './CreateMapCard.jsx';
import FetchData from './FetchData.jsx';

function Panigiria() {

    const { data, isLoading } = FetchData();

    if (isLoading) {
        return <div className="loader"></div>
    }
    
    return (
        <div className='panigiria-container'>
            <dl className='panigiria-cards'>
                {data && data.filter(item => item.id >= 6 && item.id <= 8)
            .map(item => <CreateMapCard key={item.id} data={item}/>)}</dl>
        </div>
       
    );
}

export default Panigiria;