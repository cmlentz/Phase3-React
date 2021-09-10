import React, {useState} from 'react'

export default function NewRiverForm({createRiver}) {
    const [river, setRiver] = useState({name: "", country: ""})

    function handleChange(e) {
        const updatedValue = {...river}
        updatedValue[e.target.name] = e.target.value
        setRiver(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createRiver(river)
    } 


    return (
        <div className="card">
            <h2>Create River</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    Name: <br />
                    <input name="name" value={river.name} onChange={handleChange} />
                </p>
                <p>
                    Country: <br />
                    <input name="country" value={river.country} onChange={handleChange} />
                </p>
                <p>
                    <button type="submit">Create River</button>
                </p>
            </form>
        </div>
    )
}