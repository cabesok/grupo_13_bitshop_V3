
/* const fetch = require("node-fetch"); */
let db = require("../../database/models");

module.exports = {

/* list: async function(req, res) {

    db.Products
    .findAll({
        include: [{association:"categoria"}]
    })
    .then(function(products) {
    return res.status(200).json({
        total: products.length,
        data: products,
        status: 200
    })
})
}, */
list: async function(req, res) {

    db.Products
    .findAll({
        include: [{association:"categoria"}]
    })
    .then(function(products) {

        products = products.map((product, i) => {
            product = {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                image: `http://localhost:3001/uploads/products/${product.image}`,
                detail: `http://localhost:3001/productApi/${product.id}`,
                categoria: product.categoria.title
        }
            return product
        })


    return res.status(200).json({
        total: products.length,
        data: products,
        status: 200
    })
})
},

    productsCategories: function(req, res) {
        db.Productscategories
        .findAll({
            include: [{association:"productos"}]
        })
        .then(function(categories) {
        return res.status(200).json({
            total: categories.length,
            data: categories,
            status: 200
        })
    })
},

    detail: function(req, res) {
        db.Products
        .findByPk(req.params.id)
        .then(function(product) {
        return res.status(200).json({
            data: product,
            imageUrl: `http://localhost:3001/uploads/products/${product.image}`,
            status: 200
        })
    })
},

    guardar: function(req, res) {

        db.Products
        .create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            //image: req.file.filename,
            category_id: req.body.category
        })
        .then(function(product) {
            return res.status(200).json({
                data: product,
                status: 200,
                created: "ok"
            })})
            //res.redirect("/");
        },

    delete: function(req, res) {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        //res.redirect("/")
    }    


}



/* list: async (req, res) => {
        fetch("url donde esta la data")
            .then(response => response.json())
            .then(countries => {
                return res.render("la vista que usamos", { countries })
            })

            // para traer 2 apis a la vez :
            let countries = await fetch("url donde esta la data").then(response => response.json());
            let provincias = await fetch("url donde esta la data").then(response => response.json());

            return res.render("la vista que usamos", {countries, provincias});
    }, */

        /* list: function(req, res) {
        db.Products
        .findAll()
        .then(function(products) {
        return res.status(200).json({
            total: products.length,
            totalPorCategoria: {},
            data: products,
            status: 200
        })
    })
}, */
/* list2: function(req, res) {
    db.Products.findAll({
        include: [{association:"categoria"}]
    })
    .then (function (products) {
        res.render("")
})

      //<%=products[i].categoria.name%>     
}, */

/* let cat1 = await db.Products
    .findAll({where: {category_id: 1}})

    let cat2 = await db.Products
    .findAll({where: {category_id: 2}})

    let cat3 = await db.Products
    .findAll({where: {category_id: 3}}) */

    /* totalPorCategoria: {cat1, cat2, cat3}, */