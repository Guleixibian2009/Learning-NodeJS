var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { 
    title: "Welcome to Guleixibian2009's first NodeJS project!",
  });
});

console.log(1);

fs.readdir("./public/pages", (err, files)=>{
  if (err) {
		console.log(err);
	} else{
		 files.forEach((file)=>{
			 console.log(file);
		 })
	}
});

module.exports = router;
