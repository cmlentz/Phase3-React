import React, {useState, useEffect} from 'react'
import './RiverContainer.css'
import River from './RiverCard.js'
import NewRiverForm from './NewRiverForm.js'

const BASE_URL = 'http://localhost:9393/rivers'

export default function RiverContainer() {

  const [rivers, setRivers] = useState([]);

// READ
  useEffect(() => {
    fetch(BASE_URL)
      .then(r => r.json())
      .then(json => setRivers(json));
  }, [])

  function populateRivers() {
    return rivers.map((river, idx) => 
    <River river={river} deleteRiver={deleteRiver} updateRiver={updateRiver} key={river.id}/>)
  }

//CREATE
  function createRiver(river) {
    fetch(BASE_URL + "rivers", {
      method: "POST",
      body: JSON.stringify(river),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setRivers([...rivers, json]));
  }

// DELETE  
  function deleteRiver(driver) {
    fetch(BASE_URL + '/' + driver.id, {method: "DELETE"})
    const newRivers = rivers.filter(r => r.id !== driver.id)
    setRivers(newRivers)
  }

// UPDATE
  function updateRiver(river) {
    fetch(BASE_URL + '/' + river.id, {
      method: "PATCH", 
      body: JSON.stringify(river),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    
    const newRivers = rivers.map(r => {
      if (r.id === river.id) {
        r = river
      }
      return r;
    })
    setRivers(newRivers);
  }

  return (
    <div>
      <h1>Rivers</h1>
      <ul> {rivers && populateRivers()} </ul>
    </div>
  )
}