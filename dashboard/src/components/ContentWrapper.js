import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'

function ContentWrapper() {
    return (
        <div>
     <div id="content-wrapper content" class="d-flex flex-column">
         <div id="content">
            <TopBar />
            
            <ContentRowTop />
            

        
     
     </div>
     </div>
     <Footer />
     </div>

    );
  }



  export default ContentWrapper;
