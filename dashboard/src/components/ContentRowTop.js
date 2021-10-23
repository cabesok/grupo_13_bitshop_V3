

import "bootstrap/dist/css/bootstrap.min.css";
import ContentRow from './ContentRow'
import LastProduct from './LastProduct'
import Categories from './Categories'



function ContentRowTop () {
  return (
    
    <div class= "row">
    <ContentRow />
    <div class="col-lg-6 mb-4">   
<LastProduct />
</div>

<div class="col-lg-6 mb-4 row">
<Categories />
</div>  
   </div>
    
  );
}



export default ContentRowTop;
