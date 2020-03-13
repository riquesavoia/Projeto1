var express = require('express');
var router = express.Router();

const Gpio = require('onoff').Gpio;
const Led = new Gpio(4, 'out');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('onoff', { title: 'OnOff' });
  });

router.post('/', function(req, res) {
    console.log("Dado da requisição: " + req.body.sendData);
    Led.writeSync(req.body.sendData);
    if(req.body.sendData == 1)
      res.json({'status':'ok', 'data':'O Led está acesso!'});
    else
      res.json({'status':'ok', 'data':'O Led está Apagado!'});
  });
module.exports = router;
  