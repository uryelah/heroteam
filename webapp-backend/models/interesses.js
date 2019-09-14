var db = require('../dbconnection');

var TABELA = 'INTERESSES'             ,
    ID =          'ID'            ,
    ID_USUARIO=   'ID_USUARIO'    ,
    NOME=         'NOME'          ;

var INTERESSES = {
    selectInteresses: function (data,callback) {
        var queryString = "SELECT "
                            + "INTERESSES." + ID_USUARIO        + ", "
                            + "INTERESSES." + NOME              +
                            " FROM "  + TABELA + " WHERE " + ID_USUARIO + " = "+data.id_usuario;

        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + ID_USUARIO   + ", "
                            + NOME + 
                        
                            ") VALUES (?,?);";
        var DATA_FIELDS = [ 

            data.id_usuario    ,
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
};
module.exports = INTERESSES;