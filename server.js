const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(__dirname)); 

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is up and running on port: 3000");
});