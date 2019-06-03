const fs = require('fs');

if (process.argv.length <= 2) {
    console.log("File Path: " + __filename);
    process.exit(-1);
}
 
let path = process.argv[2];
 
fs.readdir(path, function(err, items) {
    for (var i=0; i<items.length; i++) {
        var file = path + '/' + items[i];
 
        console.log("Start: " + file);
        fs.stat(file, function(f) {
            return function(err, stats) {
               console.log(f);
               console.log(stats["size"]);
            }
        }(file));
    }
});