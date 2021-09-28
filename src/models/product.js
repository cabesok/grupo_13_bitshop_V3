
const path = require('path');
const fs = require('fs');
const colorModel = require('./color.js');
const brandModel = require('./brand.js');

const model = {
    /* all: function() {
        const directory = path.resolve(__dirname,"../data","products.json")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
    }, */
    directory: path.resolve(__dirname, "../data", "products.json"),
    all: function(){
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },
    allWithExtra: function () {
        let productos = this.all();
        productos.map(element => {
            element.brand = brandModel.one(element.brand)
            return element
        }).map(element => {
            element.colors = element.colors.map(color => {
                color = colorModel.one(color)
                return color
            })
            return element
        })
        return productos;
    },
    /* one: function (id) {
        let productos = this.allWithExtra();
        let resultado = productos.find(producto => producto.id == id)
        return resultado;
    }, */
    one: function(id){
        return this.all().find(element => element.id == id);
    },
    new: function (data,file) {
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.all();
        let nuevo = {
            id: productos.length > 0 ? productos[productos.length -1].id + 1: 1,
            name: data.name,
            brand: parseInt(data.brand),
            colors: data.colors.map(color => parseInt(color)),
            image: file.filename
        }    
        productos.push(nuevo)
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;    
    },
    /* delete: function (id) {
        const directory = path.resolve(__dirname,"../data","products.json");
        let all = this.all();
        let deleted = this.one(id);
        // eliminamos la imagen de la carpeta upload
        fs.existsSync(path.resolve(__dirname,"../../public/uploads/products",deleted.image))
        fs.unlinkSync(path.resolve(__dirname,"../../public/uploads/products",deleted.image))
        // filtarmos el producto que deaseamos eliminar
        all = all.filter(element => element.id != deleted.id )
        fs.writeFileSync(directory,JSON.stringify(all,null,2));
        return true; */
        
        delete: function (id) {
            const directory = path.resolve(__dirname,"../data","products.json");
            let all = this.all();
            let deleted = this.one(id);
            all = all.filter(element => element.id != deleted.id )
            fs.writeFileSync(directory,JSON.stringify(all,null,2));
        return true;
        
        
    },
    create: function(data, file){
        const directory = path.resolve(__dirname,"../data","products.json");
        let all = this.all();
        let newItem = ({
            id: all.length > 0 ? all[all.length - 1].id + 1 : 1,
            name: data.name,
            description: data.description,
            price: data.price,
            category: data.category,
            image: file.filename /* file.url != undefined ? file.url : file.map(image => image.filename) */
            /* brand: data.brand */
            /* color: data.color, */
        })
        all.push(newItem);
        fs.writeFileSync(directory,JSON.stringify(all,null,2));
        return newItem
    },
    edit: function (data,/* file, */id) {
        const directory = path.resolve(__dirname,"../data","products.json")
        let productos = this.all();
        /* let updated = this.one(id); */
        // eliminamos la imagen de la carpeta upload
        /* fs.unlinkSync(path.resolve(__dirname,"../../public/uploads/products",updated.image)); */
        productos.map(producto => {
            if(producto.id == id ){
                producto.name = data.name,
                producto.description = data.description,
                producto.price = data.price,
                producto.category = data.category
                /* producto.image = file.filename */
                /* producto.brand = parseInt(data.brand),
                producto.colors = data.colors.map(color => parseInt(color)), */
                return producto
            }
            return producto
        })
        fs.writeFileSync(directory,JSON.stringify(productos,null,2));
        return true;
    },
    update: function(data, file, id){
        const directory = path.resolve(__dirname,"../data","products.json");
        let all = this.all();
        let newItem = ({
            id: all.length > 0 ? all[all.length - 1].id + 1 : 1,
            name: data.name,
            description: data.description,
            price: data.price,
            category: data.category
            /* image: data.file, */
            /* brand: data.brand,
            color: data.color, */
        })
        all = all.map(element => {
            if(element.id == id){
                element.name = data.name,
                element.description = data.description,
                element.price = data.price,
                element.category = data.category
                /* element.image = data.file
                element.brand = data.brand,
                element.color = data.color, */
            }
            return element
        })
        fs.writeFileSync(directory,JSON.stringify(all,null,2));
        return newItem
    }

};
module.exports = model;




