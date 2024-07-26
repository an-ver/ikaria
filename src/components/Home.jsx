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
  return (
    <div>
      <>
        <BackgroundVideo />
        <div className="home-transition"></div>
        <div className="home-content">
          <h1 className="home-heading">Καλως ήρθατε</h1>
          <h2 className="home-heading2"> στην Ικαρία</h2>
          <h3 className="home-description">Στο νησί της αιώνιας ζωής..</h3>
          <div className="home-bar"></div>
          <div className="home-dl-card">
            {data &&
              data
                .filter((item) => item.id >= 2 && item.id <= 5)
                .map((item) => <CreateCard key={item.id} data={item} />)}
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
