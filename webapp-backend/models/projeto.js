var db = require('../dbconnection');

var TABELA = 'PROJETO',
    ID =        'ID'          ,
    ID_TIME=    'ID_TIME'     ,
    NOME=       'NOME'        ,
    DESCRICAO=  'DESCRICAO'   ,
    LINK=       'LINK'        ;

var PROJETO = {
    selectProjeto: function (data,callback) {
        var queryString = "SELECT "
                            + "PROJETO." + NOME       + ", "
                            + "PROJETO." + DESCRICAO  + ", "
                            + "PROJETO." + LINK       + 
                            " FROM "  + TABELA + " WHERE " + ID_TIME + " = "+data.id_time;

        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + ID_TIME           + ", "
                            + NOME              + ", "
                            + DESCRICAO         + ", "
                            + LINK              + 
                            ") SELECT ?,?,?,? WHERE NOT EXISTS (SELECT * FROM PROJETO WHERE NOME = "+"'"+data.nome+"'"+")";
        var DATA_FIELDS = [ 
            data.id_time     ,
            data.nome        ,
            data.descricao   ,
            data.link          
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
                            + ID_TIME           + " = ? , "
                            + NOME              + " = ? , "
                            + DESCRICAO         + " = ? , "
                            + LINK              + " = ? "
                            + " WHERE " +  ID   + " = ? "

        var DATA_FIELDS = [
            data.id_time       , 
            data.nome          ,
            data.descricao     ,
            data.link          ,
            data.id                      
        ];

        return db.query(queryString, DATA_FIELDS, callback);
    }, 
};
module.exports = PROJETO;