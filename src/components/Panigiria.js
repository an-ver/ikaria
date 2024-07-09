import React from 'react';
import InternalCard from './InternalCardList';
import panigiriaData from './panigiriaData';
import './Panigiria.css';

function createCard(panigiriaData){
  return( 
    <InternalCard
        key= {panigiriaData.id}
        image={panigiriaData.image}
        name={panigiriaData.name}
        description={panigiriaData.description}
    />
    );
}

function Panigiria() {
    return (
        <div className='panigiria-container'>
            <h1>Τα Πανηγύρια</h1>
            <dl className='panigiria-cards'>{panigiriaData.map(createCard)}</dl>
        </div>
    );
}

export default Panigiria;