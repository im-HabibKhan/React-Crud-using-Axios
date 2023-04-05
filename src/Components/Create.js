import React, { useState } from 'react';
import axios  from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const header = {"Access-Control-Allow-Origin": "*" };
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        axios.post("https://6375fd3bb5f0e1eb85ff0e7c.mockapi.io/crud", {
            name: name,
            city: city,
            header
        })

        .then( () => {
            history("/read");
        });
    };

    return(
        <>
            <div className='d-flex justify-content-between m-5'>
                <h2>Create Operation</h2>
                <Link to="/read">
                    <button className='btn btn-warning'>Show Data</button>
                </Link>
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Institute Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} />
                    
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)}/>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
    
        </>
    )
}

export default Create