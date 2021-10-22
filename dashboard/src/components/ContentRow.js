
import "bootstrap/dist/css/bootstrap.min.css";
import ContentProducts from './ContentProducts'
import ContentUsers from './ContentUsers'
import ContentCategories from './ContentCategories'



function ContentRow () {
  return (
      
    
    <div class="row">
    <ContentProducts />
    <ContentUsers />
<ContentCategories />
    </div>
    
  );
}



export default ContentRow;