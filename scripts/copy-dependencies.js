
var fs = require('fs');

var contents = JSON.parse(fs.readFileSync('package.json'));
console.log(JSON.stringify({dependencies: contents.dependencies}));