const axios = require("axios")

axios.get("https://anapioficeandfire.com/api/characters/583")
    .then(response => {
        console.log(response.data)
    })