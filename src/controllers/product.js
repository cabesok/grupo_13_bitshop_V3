
const product = require("../models/product");

module.exports = {
	componentes: (req, res) => res.render("products/componentes", {style: "componentes.css", title: "Componentes", product: product.all()}),
	list: (req, res) => res.render("products/list", {style: "productList.css", title: "Product | List", product: product.all()}),
	detail: (req, res) => res.render("products/detail", {style: "productDetail", title: "Product | Detail", product: product.one(req.params.id)}),
	create: (req, res) => res.render("products/create", {style: "create.css", title: "Product | Create"}),
	edit: (req, res) => res.render("products/edit", {style: "edit.css", title: "Product | Edit", product: product.one(req.params.id)}),
    cart: (req, res) => res.render("products/cart", {style: "productCart", title: "Shopping Cart"}),


	save: (req,res) => {
		/* let saved = product.create({data: req.body, file: req.file && req.file.length > 0 ? req.file : {url:"/image/default.png"}}); */
		/* let saved = product.create(req.body,req.file && req.file.length > 0 ? req.file : {url:"/image/default.png"}); */

		let saved = product.create(req.body, req.file /* != undefined ? req.file : {url:"/image/default.png"} */);

		/* let saved = product.create(req.body, {url:"/image/default.png"}); */ 
		return saved ? res.redirect("/") : res.status(500).send("Error al cargar la informacion") 
	},
	/* edit: (req,res) => res.render("product/edit",{product:product.one(req.params.id),colors: color.all(),brands:brand.all()}), */
	update: (req,res) =>{
		let idUpdate = req.params.id ? req.params.id : req.body.id;
		let updated = product.edit(req.body, {url:"/image/default.png"} /* req.file, */, idUpdate)
		return updated ? res.redirect("/") : res.status(500).send("Error al cargar la informacion") 
	},
	delete: (req,res) => {
		let deleted = product.delete(req.params.id); // req.body.id ?
		return deleted ? res.redirect("/") : res.status(500).send("Error al cargar la informacion") 
	} 
}


/* puede ir res.redirect("/"+updates.id) : res.status(500).send("Error al cargar la informacion") */ 


