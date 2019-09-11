var express = require('express');
var router = express.Router();
var usuario = require('../models/users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// Rota para autenticação do usuario
/*
ACESSO: http://localhost:5000/users/login
  {
    "nome"  :  ""
    "senha" :  ""
  } 
*/

router.post('/login', function (req, res, next) {
  usuario.login(req.body, function (err, rows) {
      if (err) {
          //res.json(err);
          res.send("Incorrect Username and/or Password!");
      } 
      else {
        if (rows.length > 0){
          res.json(rows);
        }
        else{
          res.send("Incorrect Username and/or Password!");
        }    
      }
  });
});

// Rota para criação de usuario
/*
ACESSO: http://localhost:5000/users/cadastro
  {
    "organizador"    :  ""   ,
    "nome"           :  ""   ,
    "email"          :  ""   ,
    "senha"          :  ""   ,
    "area_atuacao"   :  ""   ,
    "conhecimento"   :  ""   ,
    "facebook"       :  ""   ,
    "linkedin"       :  ""   ,
    "github"         :  ""   ,
    "outro"          :  ""   ,
    "profissao"      :  ""
  } 
*/

router.post('/cadastro', function (req, res, next) {
  
  if (req.body.nome != "" && req.body.email != "" && req.body.senha != ""){
    usuario.insert(req.body, function (err, rows) {
        if (err) {
          res.json(err);
          //res.send("Ocorreu um erro ao completar o seu cadastro!");
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

module.exports = router;
