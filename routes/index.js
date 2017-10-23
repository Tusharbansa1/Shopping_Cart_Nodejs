var express = require('express');
var router = express.Router();
var product = require('../models/product');
/* GET home page. */
router.get('/', function(req, res , next) {
	 product.find( function(err,docs){
	 	var productChunks = [];
	 	var chunkSize = 3;
	 	for(var i=0;i<docs.length;i+= chunkSize){
	 		productChunks.push(docs.slice(i,i+chunkSize));
	 	}
	 	res.render('index', { title: 'Express' , products: docs });
	 });  
});

module.exports = router;
