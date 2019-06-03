// const testFolder = './Desktop';
// const fs = require('fs');

// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });

var fs = require('fs');
var getDirs = function(rootDir, cb) { 
    fs.readdir(rootDir, function(err, files) { 
        var dirs = []; 
        for (var index = 0; index < files.length; ++index) { 
            var file = files[index]; 
            if (file[0] !== '.') { 
                var filePath = rootDir + '/' + file; 
                fs.stat(filePath, function(err, stat) {
                    if (stat.isDirectory()) { 
                        dirs.push(this.file); 
                    } 
                    if (files.length === (this.index + 1)) { 
                        return cb(dirs); 
                    } 
                }.bind({index: index, file: file})); 
            }
        }
    });
}