var product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');
var products = [
			new product({
				imagePath: 'https://upload.wikimedia.org/wikipedia/en/3/3b/In_the_Heart_of_the_Sea_--_book_cover.jpg',
				title: 'books 1',
				description  : 'awesome  book ',
				price: 300
			}),
			new product({
				imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZW6YqVUm0H_jdRW0cDglctG5d9ti5mi5kwra3xl_ETZxSsGAi',
				title: 'books 2',
				description  : 'nice  book ',
				price: 300
			}),
			new product({
				imagePath: 'http://www.bookcovercafe.com/wp-content/uploads/book-cover-cafe-self-publish-the-smart-way-8.png',
				title: 'books 3',
				description  : 'awesome  book3 ',
				price: 330
			}),
			new product({
				imagePath: 'http://images.fromupnorth.com/210/56c6f9b1bb2f7.jpg',
				title: 'books 4',
				description  : 'awesome  book4 ',
				price: 340 
			}),
			new product({
				imagePath: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/30-best-book-covers-2016/large/2vegetariancover.png?1384968217',
				title: 'books 5',
				description  : 'a5wesome  book ',
				price: 350
			}),
			new product({
				imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxYeL5ev9qdJQKNL4xdP-vgiIBSyaMbLY_6sFpW_wwm8hXm_2',
				title: 'books 6',
				description  : 'aw6some  book ',
				price: 360
			})
];
var done=0;

for(var i=0; i<products.length; i++){
	products[i].save(function(err,result){
		done++;
		if(done === products.length){
			exit();	
		}
	});
}

function exit(){
	mongoose.disconnect();
}