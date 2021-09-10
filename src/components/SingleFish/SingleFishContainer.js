import React, {useState, useEffect} from 'react'
import SingleFish from './SingleFishCard.js'

const BASE_URL = 'http://localhost:9393/single_fish'

export default function SingleFishContainer() {

  const [fish, setFish] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(r => r.json())
      .then(json => setFish(json));
  }, [])

  function populateFish() {
    return fish.map(fish => <SingleFish fish={fish} deleteFish={deleteFish} key={fish.id}/>)
  }

// DELETE
  function deleteFish(dFish) {
    fetch(BASE_URL + '/' + dFish.id, {method: "DELETE"})
    const newFishList = fish.filter(f => f.id !== dFish.id)
    setFish(newFishList)
  }

  return (
    <div>
      <h1>Fish</h1>
      <ul>
        {fish && populateFish()}
      </ul>
    </div>
  )
}