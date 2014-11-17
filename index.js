//Core Node.js
var path = require('path');

//External Dependencies
var express = require('express'),
    morgan = require('morgan'),
    compression = require('compression'),
	nodemailer = require('nodemailer'),
	bodyParser = require('body-parser'),
	hbs = require('nodemailer-express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

app.use(compression());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/dist')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Needed for source maps to work.
if(process.env.NODE_ENV === 'development') {
   app.use('/', express.static(path.join(__dirname, '/')));
}

app.get('*', function (req, res) {
   return res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.post('/api/mail', function (req, res) {
	//console.log(req.body);
	// create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        user: 'simonpetersen200@gmail.com',
	        pass: 'nospe90#01'
	    }
	});
	var options = {
		viewEngine: 'express-handlebars',
		viewPath: path.join(__dirname, '/mailtemplates/')
	}
	transporter.use('compile', hbs(options));
	//send mail with options
	var mail = {
	   from: 'Always Fit <no-reply@alwaysfit.com>', // sender address
	   to: req.body.email, // list of receivers
	   subject: 'Du blev tilføjet', // Subject line
	   template: 'email',
	   context: {
	       name: req.body.name
	   }
	}

	transporter.sendMail(mail, function(error, info){
	    if(error){
	        console.log(error);
			res.json({message: "An error happend"});
	    }else{
	        console.log('Message sent: ' + info.response);
			res.json({message: "You have been added to the newsletter list"});
	    }
	});
});

app.listen(port);

console.log('listening on port: %d', port);
