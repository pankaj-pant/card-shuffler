import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './ShuffleCardsApp.css'

function ShuffleCardsApp() {
    const [startingDeck, setStartingDeck] = useState();
    const [drawnCard, setDrawnCard] = useState([]);
    const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

    useEffect(() => {
        const fetchData = async () =>{
            let deck = await axios.get(`${API_BASE_URL}new/shuffle/`);
            setStartingDeck(deck.data);
        };
        fetchData();
    }, []);

    const getCard = async () => {
        try{
            let cardRes = await axios.get(`${API_BASE_URL}${startingDeck.deck_id}/draw/`);
            if(!cardRes.data.success) {
                throw new Error("No card remaining!");
            }
            let card = cardRes.data.cards[0];
            setDrawnCard(st => (
                [...st, {
                    id: card.code, 
                    image: card.image, 
                    name: `${card.value} of ${card.suit}`
                    }
                ]
            ));
        } catch(err) {
            alert(err);
        }
    }

    return (
        <div className="ShuffleCardsApp">
            <h1>Card Dealer</h1>
            <button onClick={getCard}>Get new card!</button>
            <div className="card-area">
                {drawnCard.map(c => (
                    <Card key={c.id} src={c.image} alt={c.name}/>
                ))}
            </div>
            
        </div>
    )
}

export default ShuffleCardsApp;
