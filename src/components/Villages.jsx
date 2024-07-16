import React from "react";
import "../styles/Villages.css";
import CreateMapCard from './CreateMapCard.jsx';
import FetchData from './FetchData.jsx';

function Villages() {

  const { data, isLoading } = FetchData();
    if (isLoading) return <div>Loading...</div>;

  return (
        <div className='villages-container'>
            <p className="villages-description">
                Παλιά αρχοντικά, γραφικά στενά σοκάκια, παραθαλάσσια ψαροχώρια, ορεινά χωριά χαμένα στο χρόνο και κρυμμένα καταπράσινα ποτάμια..
            </p>
            <dl className='villages-cards'>
                {data && data.filter(item => item.id >= 16 && item.id <= 23)
                  .map(item => <CreateMapCard key={item.id} data={item}/>)}
              </dl>
            </div>
  );
}

export default Villages;
