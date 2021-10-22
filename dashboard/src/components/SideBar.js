import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';



function SideBar() {
    return (
        <div id="wrapper">

		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
			<hr className="sidebar-divider my-0"/>


			<li className="nav-item active">
				<Link to="/" className="nav-link" >
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - Bitshop</span>
				</Link>	
			</li>


			<hr className="sidebar-divider"/>


			<div className="sidebar-heading">Actions</div>


			<li className="nav-item">
				<Link to="/ListProducts" className="nav-link collapsed">
					<i className="fas fa-fw fa-folder"></i>
					<span>Productos</span>
				</Link>
			</li>


	</ul>
     </div>
    );
  }



  export default SideBar;