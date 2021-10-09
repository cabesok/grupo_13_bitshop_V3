
const fetch = require("node-fetch");

module.exports = {
    list: async (req, res) => {
        fetch("url donde esta la data")
            .then(response => response.json())
            .then(countries => {
                return res.render("la vista que usamos", { countries })
            })

            // para traer 2 apis a la vez :
            let countries = await fetch("url donde esta la data").then(response => response.json());
            let provincias = await fetch("url donde esta la data").then(response => response.json());

            return res.render("la vista que usamos", {countries, provincias});
    }
}