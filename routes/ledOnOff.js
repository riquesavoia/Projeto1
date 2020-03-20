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
    setTimeout(() => {
      Led.writeSync(req.body.sendData);
    }, 5000);
    res.send("Sucesso!");
  });
module.exports = router;
  