const mongoose = require("mongoose");

const app = require('./app');

const DB_HOST = "mongodb+srv://yerma4ok:vk069231@cluster0.fvkwbxd.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.connect(DB_HOST)
.then(()=> app.listen(3000))
.catch(error => console.log(error.message));

