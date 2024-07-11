import React from 'react';
import './Panigiria.css';
import CreateMapCard from './CreateMapCard.js';
import { useEffect, useState } from 'react';
import {getQuery} from './api.js';


function Panigiria() {

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
        <div className='panigiria-container'>
            <h1 className='panigiria-heading'>Τα Πανηγύρια</h1>
            <dl className='panigiria-cards'>
                {data && data.filter(item => item.id >= 6 && item.id <= 8)
            .map(item => <CreateMapCard key={item.id} data={item}/>)}</dl>
        </div>
       
    );
}

export default Panigiria;