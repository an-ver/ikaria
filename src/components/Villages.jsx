import React from "react";
import "../styles/Villages.css";
import CreateMapCard from './CreateMapCard.jsx';
import { useEffect, useState } from 'react';
import {getQuery} from './api.jsx';

function Villages() {

  const [data, setData] = useState([]);  
  const [isLoading, setIsLoading] = useState(true);

  console.log(data);

  useEffect(() => {
      const runQuery = async () => {
      setData(await getQuery());
      };

      runQuery()
      .then(() => {
          setTimeout(() => setIsLoading(false), 4500);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className='villages-container'>
            <p className="villages-description"> Παλιά αρχοντικά, γραφικά στενά σοκάκια, 
                παραθαλάσσια ψαροχώρια, ορεινά χωριά χαμένα στο χρόνο και κρυμμένα καταπράσινα ποτάμια..
                </p>
            <dl className='villages-cards'>
                {data && data.filter(item => item.id >= 16 && item.id <= 23)
            .map(item => <CreateMapCard key={item.id} data={item}/>)}</dl>
        </div>
  );

}

export default Villages;
