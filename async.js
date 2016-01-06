var fs = require('fs');
fs = fs.readFile(process.argv[2], function(err, data) {
	if (err) throw err;
	data = data.toString();
	data = data.split("\n");
	var num = data.length - 1;
	console.log(num);
});
