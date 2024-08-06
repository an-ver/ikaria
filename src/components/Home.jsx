import BackgroundVideo from "./BackgroundVideo";
import "../styles/Home.css";
import CreateCard from "./CreateCard";
import "../styles/Loader.css";
import FetchData from "./FetchData.jsx";

function Home() {
  const { data, isLoading } = FetchData();
  if (isLoading) {
    return <div className="loader"></div>;
  }
  const displayData = data && data.filter(item => item.attributes.category === 'home-page-card');
  return (
    <div>
      <>
        <BackgroundVideo />
        <div className="home-transition"></div>
        <div className="home-content">
          <div className="home-bar"></div>
          <div className="home-dl-card">
        <div className="home-dl-card">
          {displayData
            .map(item => <CreateCard key={item.id} data={item} />)}
        </div>
        </div>
        </div>
      </>
    </div>
  );
}

export default Home;
