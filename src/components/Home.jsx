import BackgroundVideo from "./BackgroundVideo";
import "../styles/Home.css";
import CreateCard from "./CreateCard";
import React from "react";
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
          <h1 className="home-heading">Καλως ήρθατε στην Ικαρία</h1>
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
