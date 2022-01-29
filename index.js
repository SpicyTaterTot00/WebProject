let express = require('express');
let bodyParser = require('body-parser');
let data = null
const axios = require('axios').default;
var app= express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use( express.static( "public" ) );
const port = process.env.PORT || 3000;


app.get('/', function(request, response){
    response.render('main', {data : data});
});

app.post('/', function(req,res){
    
   axios.get(``)
   .then(function(response){

       
       data = response.data;      
        console.log(data);
               
        res.redirect('/');
   })
   .catch(function(error){
       console.log(error);
       res.redirect('/');
   })
});





app.listen(port, function(){
    console.log('App is running on port 3000!')
})