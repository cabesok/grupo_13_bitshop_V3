import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './ListProducts.css'
import {useState, useEffect} from 'react';

function ListProducts (props) {

    const [users, setusers] = useState ([])
    

    useEffect (() => {
        fetch ("http://localhost:3001/userApi")
        .then (response => response.json())
        .then (data => {
            setusers (data.data)})
            .catch (error => console.log(error));
        }, [])
   

  return (
    <div className="container py-5">
    <div className="row text-center text-gray mb-5">
        <div className="col-lg-7 mx-auto">
            <h1 className="display-4">Users List</h1>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-8 mx-auto">
            
            <ul className="list-group shadow">
            {users.length === 0 && <p>Cargando...</p>}
            {users.map ((user, i) => {
					 return (
                <li key={i} className="list-group-item">
                                     
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2">{user.user_name}</h5>
                            <p className="font-italic text-muted mb-0 small">Categoría: {user.categoria}</p>
                            
                        </div><img src={user.image} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"/>
                    </div>
                    
                </li>
                 )})}
            </ul> 
        </div>
    </div>
</div>

)
}


export default ListProducts;