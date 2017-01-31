//link to express package
let connect=require('connect');
let url=require('url');

//create a new connect object
let app=connect();

//index "page"
let index = function(req, res, next){
  res.end('This is the home page');
};

//calculator "page"
let lab2 = function (req, res, next){

  //get thefull querystring ?amount=1000
let values =url.parse(req.url, true).query;

  //get the amount value from querystring like $_GET['amount']
let method=values.method;

//get value of x
let x=values.x;

//get value of y
let y=values.y;

//calculation
var answer=0;

if (method=="add"){
answer=parseFloat(x)+parseFloat(y);
}

else if(method=="subtract"){
answer=parseFloat(x)-parseFloat(y);
}

else if (method=="multiply"){
answer=parseFloat(x)*parseFloat(y);
}

else if(method=="divide"){
answer=parseFloat(x)/parseFloat(y);
}

else{
  answer="Make sure your method first..!"
}


  //dispalay all
  res.end('<h1>SIMPLE CALCULATOR</h1><br/> You can Add, Subtract, Multiply and Divide by entering the following commands: "add","subtract","multiply","divide".'+'<br/>'+
    'Method:'+method+ '<br/>'+
    'Value of X:'+x+ '<br/>'+
    'Value of Y:'+y+ '<br/>'+
    'Result:'+answer );

};


//json API
let api = function(req,res,next){

  let person = JSON.stringify({
    "name":"Sukhma Singh Khangura",
    "age":20,
    "nationality":"Indian"
  });
//set response type as json rather than text or html
res.writeHead(200,{"Content-Type":"application/json"});
res.end(person);
};

//map teh irl's to the correct virtual page
app.use('/api',api);
app.use('/lab2',lab2);
app.use('/',index);
//app.use(notFound);

//start http server on port 3000
let port=process.env.PORT || 3000;
app.listen(port);
console.log('connect server running on port 3000');
