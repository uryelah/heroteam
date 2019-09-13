var express = require('express');
var router = express.Router();
var usuario = require('../models/users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/all',function (req, res, next) {
  usuario.selectAll(function (err, rows) {
      if (err) {
          res.json(err);
      } else {
          res.json(rows);
      }
  });
}
);

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

/*
  ACESSO: http://localhost:5000/users/update
  {
    "nick"          :   ""  , 
    "email"         :   ""  ,
    "senha"         :   ""  ,
    "profissao"     :   ""  ,
    "area_atuacao"  :   ""  ,
    "conhecimento"  :   ""  ,
    "facebook"      :   ""  ,
    "linkedin"      :   ""  ,
    "github"        :   ""  ,
    "outro"         :   ""  ,
    "id"            :   ""
  }       
*/

router.post('/update', function (req, res, next) {
  usuario.update(req.body, function (err, rows) {
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
  ACESSO: http://localhost:5000/users/team
  {
    "id_time"    :  ""  ,
    "disponivel" :  ""  ,
    "id"         :  ""
  }       
*/

router.post('/team', function (req, res, next) {
  usuario.team(req.body, function (err, rows) {
      if (err) {
          //res.json(err);
          res.send("Ocorreu um erro ao entrar no time!");
      } 
      else {
          res.json(rows.message);    
          
      }
  });
});

/*
  // Deleta um usuario a partir do "id"
  ACESSO: http://localhost:5000/users/delete
  {
    "id"         :  ""
  }       
*/

router.delete('/delete', function (req, res, next) {
  usuario.delete(req.body, function (err, rows) {
      if (err) {
          //res.json(err);
          res.send("Ocorreu um erro ao deletar o usuario!");
      } 
      else {
          res.send("Usuario excluido com sucesso!");    
          
      }
  });
});


module.exports = router;
