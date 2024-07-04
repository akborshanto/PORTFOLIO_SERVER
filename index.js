const app=require('./app.js')
const config=require('./config/config.js')
require("dotenv").config();

//const cors = require("cors");
const port = config.app.port;//config file

/* middle ware */






app.get("/", (req, res) => {
  res.send("Helldsadfsafsdfo World!");
});





app.listen(port, () => {
  console.error(`Example app listening on port ${port}`);
});
