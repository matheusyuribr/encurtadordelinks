var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encurtador' });
});

function generateCode(){
  let text = '';
  const posible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for(let i = 1; i< 5;i++){
    text += posible.charAt(Math.floor(Math.random() * posible.length)); 
  }

  return text;

}

router.post('/new',async(req,res,next)=>{
  const url = req.body.url;
  const code = generateCode();

  res.send(`${process.env.DOMAIN}${code}`);
})

module.exports = router;
