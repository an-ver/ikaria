import React, { useState, useRef, useEffect } from "react";
import '../styles/Panigiria.css';
import CreateMapCard from './CreateMapCard.jsx';
import FetchData from './FetchData.jsx';

function Panigiria() {

    const { data, isLoading } = FetchData();
    const [currentIndex, setCurrentIndex] = useState(0);
    const initialCardsCount = 3;
    const scrollContainerRef = useRef(null);

    const handlePrev = () => {
        if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex + 1 < data.length) {
        setCurrentIndex(currentIndex + 1);
        }
    };

    useEffect(() => {
        if (scrollContainerRef.current) {
        scrollContainerRef.current.style.scrollBehavior = 'smooth';
        scrollContainerRef.current.scrollLeft = (currentIndex * scrollContainerRef.current.offsetWidth) / initialCardsCount;
        }
    }, [currentIndex, initialCardsCount]);
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