// const express = require('express');
// const axios = require('axios');
// const fs = require('fs');
// import * as fs from 'fs';
// const app = express();

// const fileName = 'user.json';
// let user = [
//     {"id": 1,"lastName": "Falceso","firstName": "Neil Patrick Angelo", "type": 0, "active": 1, "username": "admin", "password": "admin"}
//     ];
// function getUser(){
//     // user = fs.readFileSync(fileName, encoding);
//     return JSON.stringify(user);
// }

app.use((req, res, next) => { 

    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); 
    
    res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept"); 
    
       next();  }); 