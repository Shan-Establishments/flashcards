import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { selectCards } from './cardsSlice';
import { useSelector } from 'react-redux';
 
let uniqueId = uuidv4(); 
 
console.log(uniqueId);

export default function Card({ id }) {
  const cards = useSelector(selectCards); // replaced this with a call to your selector to get all the cards in state
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
