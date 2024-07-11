import React from "react";
import "../styles/Panigiria.css";
import data from "./panigiriaData";
import MapCard from "./MapCard";

function createMapCard(data) {
  return <MapCard key={data.id} image={data.image} name={data.name} />;
}

function Panigiria() {
  return (
    <div className="panigiria-container">
      <h1 className="panigiria-heading">Τα Πανηγύρια</h1>
      <p className="panigiria-paragraph">
        Τα πανηγύρια αποτελούν κορυφαία έκφραση γλεντιού των ικαριακών
        κοινοτήτων και σημαντικό πλαίσιο για πλήθος άλλων πολιτισμικών
        εκφράσεων, όπως μουσικοχορευτικές επιτελέσεις, τελετουργίες, εθιμικές
        παραδόσεις, παραγωγικές και ανταλλακτικές πρακτικές. Αποτελούν,
        επιπλέον, σημαντικό πλαίσιο για την ανανέωση συγγενικών και φιλικών
        δεσμών ανάμεσα σε άτομα, οικογένειες και χωριά, καθώς και για την
        επιτέλεση των τοπικών ταυτοτήτων. Ιστορικά, έχουν συμβάλει στη βελτίωση
        των όρων ζωής των κοινοτήτων μέσω της υλοποίησης κοινωφελών έργων.
      </p>
      <dl>{data.map(createMapCard)}</dl>
    </div>
  );
}

export default Panigiria;
