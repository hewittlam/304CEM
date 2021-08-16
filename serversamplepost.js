var http = require('http');
var fs = require("fs");
var qs = require("querystring");

var MongoClient = require("mongodb").MongoClient;
var dbUrl="mongodb://localhost:27017"
//create a server object:
http.createServer(function (req, res) {
    
    if(req.url === "/apple"){
		res.write('Hello World!'); //write a response to the client
        res.end(); //end the response
	}else if(req.url === "/register"){
		sendFileContent(res, "register.html", "text/html");

	}
	else if(req.url === "/products"){
		sendFileContent(res, "products.html", "text/html");

	}
	else if(req.url === "/single-product"){
		sendFileContent(res, "single-product.html", "text/html");

	}
	else if(req.url === "/about"){
		sendFileContent(res, "about.html", "text/html");

	}
	else if(req.url === "/contact"){
		sendFileContent(res, "contact.html", "text/html");

	}
	else if(req.url === "/index"){
		sendFileContent(res, "index.html", "text/html");

	}
	else if(req.url === "/dashboard"){
		sendFileContent(res, "dashboard.html", "text/html");

	}
	else if(req.url === "/favorites"){
		sendFileContent(res, "favorites.html", "text/html");

	}
	else if(req.url === "/ajax"){
		//console.log("login success")
	sendFileContent(res, "ajax.html", "text/html");
	}
	else if(req.url === "/Lok"){
		console.log("login success")
	sendFileContent(res, "Lok.html", "text/html");
	}
	else if(req.url === "/login"){
		console.log("login success")
		sendFileContent(res, "login.html", "text/html");
	}
	else if(req.url === "/abc"){
		sendFileContent(res, "login.html", "text/html");
	
	}else if(req.url === "/Register"){
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				user=data['login'];
				pwd=data['password'];
				console.log(user);
				console.log(pwd);
				console.log("Processed");
				res.end("dat" +user +pwd);
				//res.end("End");
				
				//var query={"login": data["login"],"pass":pwd};
				var query={"login": user,"password":pwd};
				//var myobj = {"name":"alex"};
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("apple");
							//var myobj = stringMsg;
							dbo.collection("apple_table").insertOne(query, function(err, res) {
								if (err) throw err;
								console.log("1 document inserted");
								//res.end("Account created!!");
								db.close();
												});
				});
				
								
			       });											
			});			
		}else{								
			     res.end("abc");
			}				
	}
	else if(req.url === "/delete"){
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				user=data['login'];
				pwd=data['password'];
				console.log(user);
				console.log(pwd);
				console.log("Processed");
				res.end("dat" +user +pwd);
				//res.end("End");
				
				//var query={"login": data["login"],"pass":pwd};
				var query={"login": user,"password":pwd};
				//var myobj = {"name":"alex"};
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("apple");
							//var myobj = stringMsg;
							dbo.collection("apple_table").deleteOne(query, function(err, res) {
								if (err) throw err;
								console.log("1 document inserted");
								//res.end("Account created!!");
								db.close();
												});
				});
				
								
			       });											
			});			
		}else{								
			     res.end("abc");
			}				
	}else if(req.url === "/Temp_POST_API"){
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				user=data['login'];
				pwd=data['password'];
				console.log(user);
				console.log(pwd);
				console.log("Processed");
				res.end("dat" +user +pwd);
				//res.end("End");
				
				//var query={"login": data["login"],"pass":pwd};
				var query={"login": user,"password":pwd};
				//var myobj = {"name":"alex"};
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("apple");
							//var myobj = stringMsg;
							dbo.collection("apple_table").insertOne(query, function(err, res) {
								if (err) throw err;
								console.log("1 document inserted");
								//res.end("Account created!!");
								db.close();
												});
				});
				
								
			       });											
			});			
		}else{								
			     res.end("abc");
			}				
	}else if(req.url === "/AddToFav"){
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				Fav=data['FavList'];
				user= data['user'];
				Model1= data['model1'];
				Model2= data['model2'];
				Model3= data['model3'];
				Model4= data['model4'];
				Model5= data['model5'];
				//pwd=data['password'];
				console.log(Model1+Model2+Model3+Model4+Model5);
				//console.log(pwd);
				console.log("Processed");
				//res.end("dat" +user +pwd);  temp not in use
				//res.end("End");
				
				//var query={"login": data["login"],"pass":pwd};
				//var query={"login": user,"password":pwd};   Temp not in use
				//var query={"FavList": Fav};
				var query={"User": user, "Model1": Model1, "Model2": Model2, "Model3": Model3, "Model4": Model4, "Model5": Model5};
				//var myobj = {"name":"alex"};
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("apple");
							//var myobj = stringMsg;
							dbo.collection("Testing_2").insertOne(query, function(err, res) {
								if (err) throw err;
								console.log("Favorites list updated");
								//res.end("Account created!!");
								db.close();
												});
				});
				
								
			       });											
			});			
		}else{								
			     res.end("abc");
			}				
	}else if(req.url === "/login_api"){
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				user=data['login'];
				pwd=data['password'];
				console.log(user);
				console.log(pwd);
				console.log("Processed");
				//res.end("dat" +user +pwd);
				//res.end("End");
				
				//var query={"login": data["login"],"pass":pwd};
				var query={"login": user,"password":pwd};
				//var myobj = {"name":"alex"};
MongoClient.connect(dbUrl, function(err, db) {
						if (err) throw err;
							var dbo = db.db("apple");
							var query={"login": user,"password":pwd};
							console.log(query);
							dbo.collection("apple_table").find(query).toArray(function(err, result) {
								if (err) throw err;
								console.log("comment find");
								console.log(JSON.stringify(result));
								db.close();
								return res.end(JSON.stringify(result));
							});
						});
				
								
			       });											
			});			
		}else{								
			     res.end("abc");
			}				
	}
	else if(req.url === "/getfav"){
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				user=data['login'];
				console.log(user);
				console.log("Processed");
				//res.end("dat" +user +pwd);
				//res.end("End");
				
				//var query={"login": data["login"],"pass":pwd};
				var query={"User": user};
				//var myobj = {"name":"alex"};
MongoClient.connect(dbUrl, function(err, db) {
						if (err) throw err;
							var dbo = db.db("apple");
							//var query={"login": user,"password":pwd};
							//console.log(query);
							dbo.collection("Testing_2").find(query).toArray(function(err, result) {
								if (err) throw err;
								console.log("comment find");
								console.log(JSON.stringify(result));
								db.close();
								return res.end(JSON.stringify(result));
							});
						});
				
								
			       });											
			});			
		}else{								
			     res.end("abc");
			}				
	}
	else if(req.url === "/check_fav"){
		console.log("Requested URL is url" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				data=qs.parse(formData);
				user=data['login'];
				pwd=data['password'];
				console.log(user);
				console.log(pwd);
				console.log("Processed");
				//res.end("dat" +user +pwd);
				//res.end("End");
				
				//var query={"login": data["login"],"pass":pwd};
				var query={"login": user,"password":pwd};
				//var myobj = {"name":"alex"};
MongoClient.connect(dbUrl, function(err, db) {
						if (err) throw err;
							var dbo = db.db("apple");
							var query={"login": user,"password":pwd};
							console.log(query);
							dbo.collection("apple_table").find(query).toArray(function(err, result) {
								if (err) throw err;
								console.log("comment find");
								console.log(JSON.stringify(result));
								db.close();
								return res.end(JSON.stringify(result));
							});
						});
				
								
			       });											
			});			
		}else{								
			     res.end("abc");
			}				
	}
	
else if(/^\/[a-zA-Z0-9\/-/]*.js$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/javascript");
}else if(/^\/[a-zA-Z0-9\/-/]*.bundle.min.js$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/javascript");
}else if(/^\/[a-zA-Z0-9\/-/]*.css$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/css");
}else if(/^\/[a-zA-Z0-9\/-]*.min.css$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/css");
}else if(/^\/[a-zA-Z0-9\/-]*.jpg$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "image/jpg");
}else if(/^\/[a-zA-Z0-9-._\/]*.min.js$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/javascript");
}else if(/^\/[a-zA-Z0-9-]*.min.css.map$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/map");
}else if(/^\/[a-zA-Z0-9\/-/]*.min.js.map$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/map");
}else if(/^\/[a-zA-Z0-9\/-/]*.css.map$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/map");
}else if(/^\/[a-zA-Z0-9\/-/]*.png$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "image/png");
}else if(/^\/[a-zA-Z0-9\/-/]*.ico$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/ico");
}else if(/^\/[a-zA-Z0-9\/-/?]*.ttf$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/font");
}else if(/^\/[a-zA-Z0-9\/-/?]*.woff$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/woff");
}else if(/^\/[a-zA-Z0-9\/-/?]*.woff2$/.test(req.url.toString())){
sendFileContent(res, req.url.toString().substring(1), "text/woff2");
}else{
console.log("Requested URL is: " + req.url);
res.end();
}
}).listen(8888); //the server object listens on port 8080


function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}