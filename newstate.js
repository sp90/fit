var fs = require('fs');
var chalk = require('chalk');

var writeFiles = function(statename) {
	fs.readFile("./newstate/newstate-controller.js", 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		var result = data.replace(/stateName/g, statename);

		fs.writeFile("./src/js/controllers/"+statename+".js", result, 'utf8', function (err) {
			if (err) return console.log(err);
		});
	});

	fs.readFile("./newstate/newstate-state.js", 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		var result = data.replace(/stateName/g, statename);

		fs.writeFile("./src/js/states/"+statename+".js", result, 'utf8', function (err) {
			if (err) return console.log(err);
		});
	});

	fs.readFile("./newstate/newstate-html.html", 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		var result = data.replace(/stateName/g, statename);

		fs.writeFile("./src/js/templates/pages/"+statename+".html", result, 'utf8', function (err) {
			if (err) return console.log(err);
		});
	});
}

var newStateName = process.argv.slice(2).toString();
if(newStateName.length) {
	if (fs.existsSync("./src/js/controllers/"+newStateName+".js")) {
		process.stdout.write(chalk.red("\nFiles exists choose another filename \n\n"));
	} else {
		process.stdout.write(chalk.green("\nFollowing files has been created:\n" + chalk.yellow("  ./src/js/controllers/"+newStateName+".js\n") + chalk.yellow("  ./src/js/states/"+newStateName+".js\n") + chalk.yellow("  ./src/js/templates/pages/"+newStateName+".js\n") + "remember to add link to state inside ./src/js/index.js\n\n"));
		writeFiles(newStateName);
	}
} else {
	process.stdout.write(chalk.red("\nYou need to set a name") + "\n\n");
}