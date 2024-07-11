import BackgroundVideo from './BackgroundVideo';
import './Home.css';
import CreateCard from './CreateCard';
import { useEffect, useState } from 'react';
import {getQuery} from './api.js';


function Home() {
  
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
    <div>
      <BackgroundVideo />
      <div className="home-content">
        <h1 className='home-heading'>Η Ικαρία</h1>
        <dl className='home-dl-card'>
          {data && data.filter(item => item.id >= 2 && item.id <= 5)
            .map(item => <CreateCard key={item.id} data={item}/>)}
        </dl>
      </div>
    </div>
  );
}

export default Home;