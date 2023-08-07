var express = require('express');
var router = express.Router();

let emaildd='ddillu777@gmail.com';
let passworddd= "darwin777";

let emailddd='777@gmail.com';
let passwordddd= "777";

     

router.post('/', function (req,res,next){
    let{email,Password}=req.body;

    if((email===emaildd && Password===passworddd) || ( email===emailddd&& Password=== passwordddd))
{        

  req.session.user = email;
        res.redirect('/users')
    }
    else{res.render('index',{isAlert:true})}
   

});

router.get('/', (req, res)=> {
  if(req.session.user) {
    res.render('users')
  } else res.redirect('/')
})


module.exports = router;


