import React from 'react'
import './SingleFishCard.css';

export default function FishCard({fish, deleteFish}) {
  return (
    <div className="card">
      <p>
        Species: {fish.species} <br />
        Weight: {fish.weight} <br />
        Rarity: {fish.rarity}/10 <br />
      </p>

      <button onClick={() => deleteFish(fish)}>Delete Fish</button>

    </div>
  )
}