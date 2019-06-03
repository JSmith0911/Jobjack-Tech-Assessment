const express = require('express');
const bodyParser = require('body-parser');
// const uuidv4 = require('uuid/v4');
const routes = ('./routes');



const path = require('path');
const fs = require('fs');
const api = express.Router();
const directories = require('C:/Users/Justin Smith/Desktop/New folder/Models/index');

api.use('/index', directories);
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }))
api.use(express.json());

api.route('/api/getDirectory').get((req, res) => {
    res.send({
    getDirectory: [{ File_Path: '' }, { File_Size: '' }, { Attribute_Info: ''}],
  })
})

  api.get('/', (req, res) => {
    return res.send(Object.values(directories));
  });
  api.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });

  api.use((req, res, next) => {
    req.me = directories[1];
    next();
  });

  // api.post('/directories', (req, res) => {
  //   const id = uuidv4();
  //   const directory = {
  //     id,
  //     text: req.body.text,
  //   };
  
  //   directories[id] = directory;
  
  //   return res.send(directory);
  // });

  api.use((req, res, next) => {
    req.directory = directories[1];
    next();
  });

  api.use((req, res, next) => {
    req.context = {
      db,
      directory: db.directories[1],
    };
    next();
  });
  

const port = process.env.PORT || 3000;
api.listen(port, () => console.log(`listening on port ${port}`));
