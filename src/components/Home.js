import BackgroundVideo from './BackgroundVideo';
import CardList from './CardList';
import details from './Details';
import {useState,useEffect} from "react"
import {getQuery} from "./api.js"
function createCard(data) {
  return (
    <CardList
      key={details.id}
      image={details.image}
      name={details.name}
      description={details.description}
      path={details.path}
    />
  );
}

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
        <dl className='home-dl-card'>{data.map(createCard)}</dl>
      </div>
    </div>
  );
}

export default Home;