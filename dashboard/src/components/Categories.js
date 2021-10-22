import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react'



function Categories (props) {

    const [categories, setcategories] = useState ([])
    

    useEffect (() => {
        fetch ("http://localhost:3001/productApi/categories")
        .then (response => response.json())
        .then (data => {
            setcategories (data.data)})
            .catch (error => console.log(error));
        }, [])
   
		
  return (
    <div>
             
			 <ul>
				 {categories.length === 0 && <p>Cargando...</p>}
				
			            
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Categorías:</h5>
								</div>
								
				 
												{categories.map ((category, i) => {
					 return (
								<div className="card-body">
									
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													<li key={i=1}> {category.title} Total: {category.productos.length} </li>
												</div>
											</div>
										</div>
										

  									
   								</div>)})}
 						  </div>
  						 
				 
   </ul>
   </div>
  );
}



export default Categories;
