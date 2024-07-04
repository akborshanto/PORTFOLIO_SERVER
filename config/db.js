const mongoose = require('mongoose');
const config=require('./config')
const DB_URL=config.db.url;
mongoose.connect(DB_URL)
.then(console.log("CONNECT"))
.catch((err)=>{
    console.error('Failed to connect to MongoDB:', err);
    //process.exit(1)// বন্ধ করে এবং 1 ত্রুটি কোড ফেরত দেয়
})