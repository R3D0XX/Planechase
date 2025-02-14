import { useState, useEffect } from "react";
import axios from "axios";
let hasFetched = false; // Kontrollvariable

const useFetchCards = () => {
    const [card, setCard] = useState<any | null>(null); // saves the card
    const [loading, setLoading] = useState<boolean>(true); //shows loading
    const [error, setError] = useState<string | null>(null); // saves error message
    
    const fetchRandomCard = async () => {
         if (hasFetched) return; // Verhindert mehrfaches Ausführen
    hasFetched = true; // Setzt die Kontrollvariable
        try {
             setLoading(true); // Ladezustand aktivieren
            setError(null); // Fehler zurücksetzen


            const response = await axios.get("https://api.scryfall.com/cards/random");
            console.log('Api response', response.data);
            setCard(response.data)//speicher die Karte im State
        } catch (err: any) {
            console.error("Failed to fetch the Card!", err);
            
            setError(err.message || "Something went wrong!");
        } finally {
            setLoading(false); // deaktivate loading
        };
    };
    useEffect(() => {
        fetchRandomCard();
    }, []);
    return {
        card, loading, error, refetch: fetchRandomCard
    };
};
export default useFetchCards;