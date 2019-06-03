app.route('/api/getDirectory/:searchQuery').get((req, res) => {
    const requestedQuery = req.params['searchQuery']
    res.send({ name: requestedQuery })
  })

  const fs = require("fs");

//   let directory = searchQuery
//   let files = fs.readdirSync(directory);
//   console.log(files);

  fs.readdir(directory, (err, files)=>{
      if (err) {
          console.log(err.message);
      }else{
          console.log(files);
      }
  })