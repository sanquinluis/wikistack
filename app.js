const express = require("express");
const app = express();
const morgan = require('morgan');
const { db } = require('./models');
const PORT = 3000;


app.get("/", (req, res, next)=>{
    res.send("Can you see me?")
});
app.use(express.static("views"));


db.authenticate().
then(() => {
  console.log('connected to the database');
});


const init = async () =>{
    await db.sync()
    app.listen(PORT,() =>{
        console.log(`App is listening in ${PORT}`);
    })
}
init();
