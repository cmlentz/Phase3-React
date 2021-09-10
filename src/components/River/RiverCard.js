import React, {useState} from 'react';
import './RiverCard.css';

export default function RiverCard({river, deleteRiver, updateRiver, initialDelay=0}) {
  const [newRiver, setNewRiver] = useState({...river});

  function handleChange(e) {
    const updatedValue = {...newRiver}
    updatedValue[e.target.name] = e.target.value
    setNewRiver({...updatedValue})
  }

  function handleUpdate(e) {
    e.preventDefault()
    updateRiver(newRiver)
  }

  return (
    <div className="card">
      <p>
        River: {river.name} <br />
        Country: {river.country}
      </p>

          <button onClick={() => deleteRiver(river)}>Delete River</button>

          <form onSubmit={handleUpdate}>
            <input name="name" value={newRiver.name} onChange={handleChange} />
            <input name="country" value={newRiver.country}onChange={handleChange} />
            <button type="submit">Update River</button>
          </form>
    </div>
  )
}