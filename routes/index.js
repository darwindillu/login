var express = require('express');
var router = express.Router();


router.get('/', function(req, res,next) {
    if(req.session.user) {
        res.redirect('/users')
    } else{
        res.render('index');
    }
  
});

router.get('/logout', (req,res,next)=>{
    req.session.destroy((err)=> {
        if (err) {
            res.send(err.message)
        } else {
            res.redirect('/')
        }
    })
  });




module.exports = router;
