import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component } from 'react';
import {useState, useEffect} from 'react';

function LastProduct (props) {

    const [lastProduct, setlastProduct] = useState ([])
    /* const [lastProductImage, setlastProductImage] = useState ([]) */

    useEffect (() => {
        fetch ("http://localhost:3001/productApi")
        .then (response => response.json())
        .then (data => {
            setlastProduct (data.data[data.data.length - 1 ])})
            .catch (error => console.log(error));
        }, [])

       /*  useEffect (() => {
            fetch ("http://localhost:3001/uploads/products")
            .then (response => response.json())
            .then (data => {
                setlastProductImage (data.length - 1)})
                .catch (error => console.log(error));
            }, [])  */   
   
        
  return (



      <div>
  	

			
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h5 class="m-0 font-weight-bold text-gray-800">Último producto creado: {lastProduct.name}</h5>
								</div>
								<div class="card-body">
									<div class="text-center">
                                    <img class="img-fluid px-3 px-sm-4 mt-3 bm-4" style={{width:'25rem'}} src={`http://localhost:3001/uploads/products/${lastProduct.image}`} alt=""/>
									</div>
									<p>{lastProduct.description}</p>
									<a class="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver producto</a>
								</div>
							</div>
						</div>
                         
    );
  }



  export default LastProduct;
