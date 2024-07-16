import '../styles/Info.css';
import FetchData from './FetchData.jsx';

function Info() {
  
  const { data, isLoading } = FetchData();
  
  const handleClick = (id) => {
      const item = data.find(item => item.id === id);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id} onClick={() => handleClick(item.id)}> {}
          <h1>{item.attributes.Description}</h1>
        </div>
      ))}
    </div>
  );
}

export default Info;