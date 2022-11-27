const axios = require('axios');

axios.get("https://animechan.vercel.app/api/random")
    .then(function (resp){
        console.log(resp.data.anime);
    })
    .catch(function (err){
        console.log(err);
    })