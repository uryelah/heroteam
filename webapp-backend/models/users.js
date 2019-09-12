var db = require('../dbconnection');

var TABELA = 'USUARIO',
    ID =                  'ID'          ,
    ID_TIME=              'ID_TIME'     ,
    ORGANIZADOR=          'ORGANIZADOR' ,
    DISPONIVEL=           'DISPONIVEL'  ,
    AREA_ATUACAO=         'AREA_ATUACAO',
    CONHECIMENTO=         'CONHECIMENTO',
    FACEBOOK=             'FACEBOOK'    ,
    LINKEDIN=             'LINKEDIN'    ,
    GITHUB=               'GITHUB'      ,
    OUTRO=                'OUTRO'       ,
    NOME=                 'NOME'        ,
    EMAIL=                'EMAIL'       ,
    SENHA=                'SENHA'       ,
    PROFISSAO=            'PROFISSAO'   ;

var USUARIO = {
    login: function (data,callback) {
        var queryString = "SELECT "
                            + "USUARIO." + ID           + ", "
                            + "USUARIO." + NOME         + ", "
                            + "USUARIO." + EMAIL        + ", "
                            + "USUARIO." + PROFISSAO    + 
                            
                            " FROM " + TABELA + " WHERE " + NOME +" = ? OR " + EMAIL + " = ? AND" + " SENHA = ?";

        var DATA_FIELDS = [ 
            data.nome       ,
            data.nome       ,
            data.senha      ,
            ];

        return db.query(queryString,DATA_FIELDS , callback);
    },
    selectAll: function (callback) {
        var queryString = "SELECT "
                            + "Usuario." + ID               + ", "
                            + "Usuario." + NOME             + ", "
                            + "Usuario." + EMAIL            + ", "
                            + "Usuario." + SENHA            + ", "
                            + "Usuario." + AREA_ATUACAO     + ", "
                            + "Usuario." + CONHECIMENTO     + ", "
                            + "Usuario." + FACEBOOK         + ", "
                            + "Usuario." + LINKEDIN         + ", "
                            + "Usuario." + GITHUB           + ", "
                            + "Usuario." + OUTRO            + ", "
                            + "Usuario." + PROFISSAO        + 
                            " FROM "     + TABELA;

        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + ORGANIZADOR  + ", "
                            + NOME         + ", "
                            + EMAIL        + ", "
                            + SENHA        + ", "
                            + AREA_ATUACAO + ", "
                            + CONHECIMENTO + ", "
                            + FACEBOOK     + ", "
                            + LINKEDIN     + ", "
                            + GITHUB       + ", "
                            + OUTRO        + ", "
                            + PROFISSAO    +
                            ") SELECT ?,?,?,?,?,?,?,?,?,?,? WHERE NOT EXISTS (SELECT * FROM USUARIO WHERE NOME = "+"'"+data.nome+"'"+" OR EMAIL =" +"'"+data.email+"'"+")";
        var DATA_FIELDS = [ 

            data.organizador    ,
            data.nome           ,
            data.email          ,
            data.senha          ,
            data.area_atuacao   ,
            data.conhecimento   ,
            data.facebook       ,
            data.linkedin       ,
            data.github         ,
            data.outro          ,
            data.profissao     
        ];

        return db.query(queryString, DATA_FIELDS, callback);
    },
    delete: function (data, callback) {
        var queryString = "DELETE FROM " + TABELA + 
                          " WHERE " + ID + " = ? ";
        var DATA_FIELDS = [
            data.id
        ];

        return db.query(queryString, DATA_FIELDS, callback);
    },
    update: function (data, callback) {
        var queryString = "UPDATE " + TABELA + " SET " 
                            + NOME              + " = ? , "
                            + EMAIL             + " = ? , "
                            + SENHA             + " = ? , "
                            + PROFISSAO         + " = ? , "
                            + AREA_ATUACAO      + " = ? , "
                            + CONHECIMENTO      + " = ? , "
                            + FACEBOOK          + " = ? , "
                            + LINKEDIN          + " = ? , "
                            + GITHUB            + " = ? , "
                            + OUTRO             + " = ?   "
                            + " WHERE " +  ID  + " = ?   "
        var DATA_FIELDS = [
            data.nome           , 
            data.email          ,
            data.senha          ,
            data.profissao      ,
            data.area_atuacao   ,
            data.conhecimento   ,
            data.facebook       ,
            data.linkedin       ,
            data.github         ,
            data.outro          ,
            data.id                      
        ];

        return db.query(queryString, DATA_FIELDS, callback);
    },
    team: function (data, callback) {
        var queryString = "UPDATE " + TABELA + " SET " 
                            + ID_TIME           + " = ? , "
                            + DISPONIVEL        + " = ?   "
                            + " WHERE " +  ID   + " = ?   "
        var DATA_FIELDS = [
            data.id_time    ,
            data.disponivel ,
            data.id  
        ];

        return db.query(queryString, DATA_FIELDS, callback);
    }, 
};
module.exports = USUARIO;