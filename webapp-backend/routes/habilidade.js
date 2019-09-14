var express = require('express');
var router = express.Router();
var habilidade = require('../models/habilidade.js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/all',function (req, res, next) {
  habilidade.selectAll(function (err, rows) {
      if (err) {
          res.json(err);
      } else {
          res.json(rows);
      }
  });
}
);

/*
  "id_hackathon":"",
	"habilidade_leader":"",
	"nome":"",
	"descricao":"",
	"n_participante":"",
	"completo":"",
	"devs":"",
	"designers":"",
	"business":"",
  "marketing":"" 
*/

router.post('/insert', function (req, res, next) {
  
  if (req.body.nome != "" && req.body.email != "" && req.body.senha != ""){
    habilidade.insert(req.body, function (err, rows) {
        if (err) {
          //res.json(err);
          res.send("Ocorreu um erro ao criar o seu time!");
        } 
        else {
          res.json(rows);
        }
    });
  }
  else{
    res.send("Ocorreu um erro ao completar o seu cadastro!");
    console.log(req.body.nome,req.body.email,req.body.senha)
  }
});

/*	
  "habilidade_leader":"",
	"nome":"",
	"descricao":"",
	"n_participante":"",
	"completo":"",
	"devs":"",
	"designers":"",
	"business":"",
	"marketing":"",
  "id":""
*/

router.post('/update', function (req, res, next) {
  habilidade.update(req.body, function (err, rows) {
      if (err) {
          res.json(err);
          //res.send("Ocorreu um erro ao atualizar seu perfil!");
      } 
      else {
          res.json(rows.message);    
      }
  });
});

router.delete('/delete', function (req, res, next) {
  habilidade.delete(req.body, function (err, rows) {
      if (err) {
          //res.json(err);
          res.send("Ocorreu um erro ao deletar o habilidade!");
      } 
      else {
          res.send("habilidade excluido com sucesso!");    
          
      }
  });
});


module.exports = router;
