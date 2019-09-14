var db = require('../dbconnection');

var TABELA = 'HABILIDADE',
    ID =                    'ID'            ,
    ID_USUARIO=             'ID_USUARIO'    ,
    NOME=                   'NOME'          ;

var HABILIDADE = {
    selectAll: function (callback) {
        var queryString = "SELECT "
                            + "HABILIDADE." + ID                + ", "
                            + "HABILIDADE." + ID_USUARIO        + ", "
                            + "HABILIDADE." + NOME              +
                            " FROM "  + TABELA            ;

        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + ID_USUARIO      + ", "
                            + NOME              + 
                            ") SELECT ?,? WHERE NOT EXISTS (SELECT * FROM HABILIDADE WHERE NOME = "+"'"+data.nome+"'"+")";
        var DATA_FIELDS = [ 
            data.id_usuario       ,
            data.nome             
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
                            +   NOME                + " = ? "
                            + " WHERE " +  ID       + " = ? "

        var DATA_FIELDS = [
            data.nome               ,
            data.id                      
        ];

        return db.query(queryString, DATA_FIELDS, callback);
    }, 
};
module.exports = HABILIDADE;