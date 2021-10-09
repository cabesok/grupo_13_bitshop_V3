let db = require("../database/models");

let productsController = {
    componentes: function(req, res) {
        db.Products.findAll({where: {
            category_id: 1
        }})
        .then(function(products) {
        res.render("products/componentes", {style: "componentes.css", title: "Componentes", products:products})
    })
},
    perifericos: function(req, res) {
        db.Products.findAll({where: {
            category_id: 2
        }})
        .then(function(products) {
        res.render("products/perifericos", {style: "perifericos.css", title: "Perifericos",products:products})
})
},
    pcs: function(req, res) {
        db.Products.findAll({where: {
            category_id: 3
        }})
        .then(function(products) {
        res.render("products/pcs", {style: "pcs.css", title: "PCs",products:products})
})
},
    crear: function(req, res) {
        db.Productscategories.findAll()
        .then(function(category) {
        return res.render("products/createProduct", {style: "createProduct.css", title: "Producto | Crear", category:category})
})
},
    /* crear: (req, res) => res.render("products/createProduct", {style: "createProduct.css", title: "Producto | Crear"}), */

    guardar: function(req, res) {
        db.Products.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.file.filename, // req.file.image ?
            category_id: req.body.category
        })
        
        res.redirect("/");
},

    detail: function(req, res) {
        db.Products.findByPk(req.params.id , {
            include: [{association: "categoria"}]
        } )
        .then(function(product) {
        res.render("products/detailProduct", {style: "detailProduct.css", title: "Product | Detail",product:product})
    }).catch(error => console.error(error)) 
},/* (req, res) => res.render("products/detailProduct", {style: "detailProduct.css", title: "Product | Detail"}), */

    edit: function(req, res) {

        let pedidoProducto = db.Products.findByPk(req.params.id);
        let pedidoCategorias = db.Productscategories.findAll();

        Promise.all([pedidoProducto, pedidoCategorias])
            .then(function([product, categories]){
                res.render("products/editProduct", {style: "editProduct.css", title: "Product | Edit", product:product , categories:categories })
            })
    },

    actualizar: async function(req, res) {
        let productoAEditar = await db.Products.findOne({where: {
            id: req.params.id
        }})

        let imagen = typeof req.file == "undefined" ? productoAEditar.image : req.file.filename;

        console.log(imagen);

        db.Products.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: imagen , // req.file.image ?
            category_id: req.body.category
        }, {where: {
            id: req.params.id
        }}).then(data => res.redirect("/product/detail/" + req.params.id));
},

    delete: function(req, res) {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/")
    }
};

module.exports = productsController;