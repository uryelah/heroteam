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

router.post('/cadastro', function (req, res, next) {
  
  if (req.body.nick != "" && req.body.email != "" && req.body.senha != "" && req.body.nick != undefined
   && req.body.email != undefined && req.body.senha != undefined && req.body.senha != null 
   && req.body.nick != null && req.body.email != null){
    usuario.insert(req.body, function (err, rows) {
        if (err) {
          //res.json(err);
          res.send("Ocorreu um erro ao completar o seu cadastro!");
        } 
        else {
          if(rows.affectedRows > 0){
            // res.json(rows);
            res.send("Seu cadastro foi realizado com sucesso!");
          }
          else{
            res.send("O nome/email ja está cadastrado!");
          }
        }
    });
  }
  else{
    res.send("Certifique-se de que preencheu todos os campos obrigatorios!");
  }
});

router.post('/update', function (req, res, next) {
  if (req.body.nick != "" && req.body.email != "" && req.body.senha != "" && req.body.nick != undefined
   && req.body.email != undefined && req.body.senha != undefined && req.body.senha != null 
   && req.body.nick != null && req.body.email != null){
  usuario.update(req.body, function (err, rows) {
      if (err) {
          res.json(err);
          //res.send("Ocorreu um erro ao atualizar seu perfil!");
      } 
      else {
        if (rows.affectedRows > 0){
          //res.json(rows);
          res.send("Usuario atualizado com sucesso!");    
        }
      }
  });
  }else{
    res.send("Dasdos informados incorretamente!");
  }
});

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
