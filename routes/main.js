var express = require('express');
var axios = require('axios');
var router = express.Router();
var jsdom = require("jsdom");
var { JSDOM } = jsdom;

var pageList = ['','index'/*,'about','license'*/];
pageList.forEach(pageName => {
  router.get(`/${pageName}`, function(req, res, next) {
    if (pageName == '') {
      pageName = 'home';
    }
    axios.get(`http://localhost:8080/pages/${pageName}.xhtml`)
    .then(function (response) {
      // handle success
      console.window = new JSDOM(response.data).window;
      console.document = new JSDOM(response.data).window.document;
      console.window.title = console.document.getElementById("Main").getElementsByTagName("h2")[0].innerHTML;
      console.window.content = console.document.getElementById("content-wrapper").innerHTML;
    })
    .catch(function (error) {
      // handle error
      console.error("Error!");
      console.error(error);
      console.window = "error";
      console.window.title = null;
      console.window.content = null;
    })
    .then(function () {
      if (console.window.title != undefined && console.window.title != null) {
        res.render('main', { 
          title: console.window.title,
          main: console.window.content
        });
        res.end();
      } else {
        res.render('error');
      }
    });
  });
});

module.exports = router;
