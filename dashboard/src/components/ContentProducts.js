import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import {useState, useEffect} from 'react';

function ContentProducts (props) {

    const [products, setproducts] = useState ([])
    

    useEffect (() => {
        fetch ("http://localhost:3001/productApi")
        .then (response => response.json())
        .then (data => {
            setproducts (data.total)})
            .catch (error => console.log(error));
        }, [])
   

  return (




<div class="col-md-4 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de Productos</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{products}</div>
                </div>
                <div class="col-auto">
                    <i class="fas fa-film fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
</div>

);
}


export default ContentProducts;