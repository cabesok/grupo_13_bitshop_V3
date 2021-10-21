import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


function TopBar() {
    return (

       
     <div>
         <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


					<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
						<i class="fa fa-bars"></i>
					</button>


					<ul class="navbar-nav ml-auto">


						<li class="nav-item dropdown no-arrow mx-1">
							<a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i class="fas fa-bell fa-fw"></i>

								<span class="badge badge-danger badge-counter">3+</span>
							</a>
						</li>


						<li class="nav-item dropdown no-arrow mx-1">
						    	<a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i class="fas fa-envelope fa-fw"></i>

								<span class="badge badge-danger badge-counter">7</span>
							    </a>
						</li>

						<div class="topbar-divider d-none d-sm-block"></div>

					</ul>

				</nav>

        

     </div>
    );
  }



  export default TopBar;
