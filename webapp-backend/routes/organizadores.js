var express = require('express');
var router = express.Router();
var projeto = require('../models/projeto.js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
    "id_time":""
*/

router.get('/team',function (req, res, next) {
  projeto.selectProjeto(req.body,function (err, rows) {
      if (err) {
          res.json(err);
      } else {
          res.json(rows);
      }
  });
}
);


router.post('/insert', function (req, res, next) {
  
  if (req.body.nome != "" && req.body.email != "" && req.body.senha != ""){
    projeto.insert(req.body, function (err, rows) {
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
  "team_leader":"",
	"nome":"",
	"descricao":"",
	"link":""
*/


router.post('/update', function (req, res, next) {
  projeto.update(req.body, function (err, rows) {
      if (err) {
          res.json(err);
          //res.send("Ocorreu um erro ao atualizar seu perfil!");
      } 
      else {
          res.json(rows.message);    
      }
  });
});

/*
  "id":""
*/

router.delete('/delete', function (req, res, next) {
  projeto.delete(req.body, function (err, rows) {
      if (err) {
          //res.json(err);
          res.send("Ocorreu um erro ao deletar o projeto!");
      } 
      else {
          res.send("projeto excluido com sucesso!");    
          
      }
  });
});

module.exports = router;
