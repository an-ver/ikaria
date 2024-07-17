import React from 'react';
import '../styles/Panigiria.css';
import CreateMapCard from './CreateMapCard.jsx';
import FetchData from './FetchData.jsx';

function Panigiria() {

    const { data, isLoading } = FetchData();
    if (isLoading) {
        return <div className="loader"></div>
    }
    return (
        <div className='panigiria-container'>
            <p className='panigiria-description'>Στα πανηγύρια της Ικαρίας, η μουσική αγκαλιάζει τον αέρα και η γη πάλλεται στον ρυθμό του χορού. 
                Οι άνθρωποι γίνονται ένα με τη φύση, μοιράζοντας χαρά και αγάπη. Κρασί ρέει άφθονο, 
                χαρίζοντας γέλιο και ζωντάνια, ενώ η νύχτα ανάβει με τα αστέρια της καρδιάς. 
                Εκεί, κάθε στιγμή είναι μια αιώνια γιορτή της ζωής.</p>
            <dl className='panigiria-cards'>
                {data && data.filter(item => item.id >= 6 && item.id <= 8)
            .map(item => <CreateMapCard key={item.id} data={item}/>)}</dl>
        </div>
       
    );
}

export default Panigiria;