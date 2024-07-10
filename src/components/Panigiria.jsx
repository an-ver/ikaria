import React from "react";
import CardList from "./InternalCard";
import details from "./Details";

function createCard(details) {
  return (
    <CardList
      key={details.id}
      image={details.image}
      name={details.name}
      description={details.description}
    />
  );
}

function Panigiria() {
  return (
    <>
      <dl className="dictionary">{details.map(createCard)}</dl>
    </>
  );
}

export default Panigiria;
