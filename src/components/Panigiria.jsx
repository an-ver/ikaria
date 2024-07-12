import React from 'react';
import '../styles/Panigiria.css';
import CreateMapCard from './CreateMapCard.jsx';
import { useEffect, useState } from 'react';
import {getQuery} from './api.jsx';
import { ImageSlider } from "./ImageSlider";
import panigiri1 from "../assets/images/panigiri1.jpg";
import panigiri2 from "../assets/images/panigiri2.jpg";
import panigiri3 from "../assets/images/panigiri3.jpg";
import panigiri4 from "../assets/images/panigir4.jpg";

const IMAGES = [panigiri1, panigiri2, panigiri3, panigiri4];
function Panigiria() {

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
        <div className='panigiria-container'>
            <p className='panigiria-description'>Στα πανηγύρια της Ικαρίας, η μουσική αγκαλιάζει τον αέρα και η γη πάλλεται στον ρυθμό του χορού. 
                Οι άνθρωποι γίνονται ένα με τη φύση, μοιράζοντας χαρά και αγάπη. Κρασί ρέει άφθονο, 
                χαρίζοντας γέλιο και ζωντάνια, ενώ η νύχτα ανάβει με τα αστέρια της καρδιάς. 
                Εκεί, κάθε στιγμή είναι μια αιώνια γιορτή της ζωής.</p>
            <dl className='panigiria-cards'>
                {data && data.filter(item => item.id >= 6 && item.id <= 8)
            .map(item => <CreateMapCard key={item.id} data={item}/>)}</dl>
            <div className="panigiri-slider-container">
                <ImageSlider imageUrls={IMAGES} />
            </div>
        </div>
       
    );
}

export default Panigiria;