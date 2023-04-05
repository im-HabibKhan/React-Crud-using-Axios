import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [city, setCity] = useState("");

    const navigate = useNavigate();

    useEffect( () => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setCity(localStorage.getItem("city"));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://6375fd3bb5f0e1eb85ff0e7c.mockapi.io/crud/${id}`, {
            name: name,
            city: city,
        })

        .then( () => {
            navigate("/read");
        });
    }

    return (
    <>
        <h2 className="m-5">Update Operation</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Institute Name</label>
                    <input type="text" value={name} className="form-control"
                    onChange={(e) => setName(e.target.value)} 
                    />
                    
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input type="text" value={city} className="form-control" 
                    onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary mx-4" 
                onClick={handleUpdate}>Update</button>
                <Link to="/read">
                    <button className='btn btn-secondary mx-4'>Back to Table</button>
                </Link>
            </form>
    </>
  )
}

export default Update