import React from 'react';
import '../styles/Panigiria.css';
import CreateMapCard from './CreateMapCard.jsx';
import { useEffect, useState } from 'react';
import {getQuery} from './api.jsx';


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
        <div className='container'>
            <h1 className='heading'>Τα Πανηγύρια</h1>
            <dl className='cards'>
                {data && data.filter(item => item.id >= 6 && item.id <= 8)
            .map(item => <CreateMapCard key={item.id} data={item}/>)}</dl>
        </div>
       
    );
}

export default Panigiria;