const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
/* const product = require("../controllers/product"); */
const productsController = require("../controllers_db/productsController")


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    /* cb(null, path.extname(file.originalname).indexOf("jpg") != -1 ? path.resolve(__dirname, "../../public/uploads", "products") : path.resolve(__dirname, "../../public/uploads", "users") ) */
    cb(null, path.join(__dirname, '../../public/uploads/products'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + path.extname(file.originalname))
    /* cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`) */
  }
})

const upload = multer({storage: storage});



// Rutas para base da datos SQL

router.get("/componentes", productsController.componentes); 
router.get("/perifericos", productsController.perifericos);
router.get("/pcs", productsController.pcs); 
router.get("/crear", productsController.crear);
router.get("/buscar", productsController.buscar);
router.get("/detail/:id", productsController.detail); 
router.get("/edit/:id", productsController.edit);

router.post("/crear", upload.single("image"), productsController.guardar);
router.post("/edit/:id", upload.single("image"), productsController.actualizar);
router.delete("/delete/:id", productsController.delete);

// Rutas para base da datos JSON

/* router.get("/", product.list); */  

/* router.get("/componentes", product.componentes);  
router.get("/create", product.create);
router.get("/cart", product.cart);
router.get("/:id", product.detail);
router.get("/edit/:id", product.edit);

router.post("/save", upload.single("image"), product.save);
router.put("/update/:id", product.update);
router.delete("/:id", product.delete); */

module.exports = router;



   
  