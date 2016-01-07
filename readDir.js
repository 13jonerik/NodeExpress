var fs = require('fs');
fs = fs.readdir(process.argv[2], function(err, list) {
	if (err) throw err;
	for (var i = 0; i < list.length; i++) {
		var regex = new RegExp("." + process.argv[3], "g"); 
		if (regex.test(list[i])) {
			console.log(list[i]);
		}
	}
});
