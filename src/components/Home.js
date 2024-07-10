import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import InternalCard from './InternalCardList';
import details from './Details';

function createCard(details) {
  return (
    <InternalCard
      key={details.id}
      image={details.image}
      name={details.name}
      description={details.description}
      path={details.path}
    />
  );
}

function Home() {
  return (
    <div>
      <BackgroundVideo />
      <div className="home-content">
        <h1 className='home-heading'>Η Ικαρία</h1>
        <dl className='home-dl-card'>{details.map(createCard)}</dl>
      </div>
    </div>
  );
}

export default Home;