import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Read = () => {

    const [data,setData] = useState([]);
    const [tabledark, setTableDark] = useState("");

    function getData() {
        axios
          .get("https://6375fd3bb5f0e1eb85ff0e7c.mockapi.io/crud")
          .then((res) => {
                console.log(res.data);
                setData(res.data);
          });
    }

    function handleDelete(id) {
        axios
            .delete(`https://6375fd3bb5f0e1eb85ff0e7c.mockapi.io/crud/${id}`)
            .then( () => {
                getData();
             });
    }

    const setToLocalStorage = (id, name, city) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("city", city);
    }

    useEffect (() => {
        getData();
    }, []);

    return (
        <>
            <div className="form-check form-switch m-4">
                <input
                className="form-check-input"
                type="checkbox"
                onClick={() => {
                    if (tabledark === "table-dark") setTableDark("");
                    else setTableDark("table-dark");
                }}
                />
            </div>
            <div className='d-flex justify-content-between m-3'>
                <h2>Read Operation</h2>
                <Link to="/">
                    <button className='btn btn-info'> + Add Data</button>
                </Link>
            </div>
            <table class={`table ${tabledark}`}>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                {
                    data.map( (eachData) => {
                        return (
                            <>
                            <tbody>
                                <tr>
                                <th scope="row">{eachData.id}</th>
                                <td>{eachData.name}</td>
                                <td>{eachData.city}</td>
                                <td>
                                    <Link to="/update">
                                        <button className='btn-success' onClick={ () => setToLocalStorage(eachData.id, eachData.name, eachData.city)}>Edit</button>
                                    </Link>
                                </td>
                                <td><button className='btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button></td>
                                </tr>   
                            </tbody>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Read