var db = require('../dbconnection');

var TABELA = 'CONVITE_ENVIADO',
    ID =                    'ID'            ,
    ID_USUARIO=             'ID_USUARIO'    ,
    ID_ENVIADO=             'ID_CONVIDA'    ;  

var CONVITE_ENVIADO = {
    selectConviteRecebido: function (data,callback) {
        var queryString = "SELECT "
                            + "CONVITE_ENVIADO." + ID                + ", "
                            + "CONVITE_ENVIADO." + ID_USUARIO        + ", "
                            + "CONVITE_ENVIADO." + ID_ENVIADO        + 
                            " FROM "  + TABELA + ID_USUARIO + " = " + data.id ;
        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + ID_USUARIO      + ", "
                            + ID_CONVIDADO    + 
                            ") SELECT ?,? WHERE NOT EXISTS (SELECT * FROM CONVITE_ENVIADO WHERE ID_CONVIDADO = "+"'"+data.id_convidado+"'"+")";
        var DATA_FIELDS = [ 
            data.id_usuario       ,
            data.id_convidado      
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
module.exports = CONVITE_ENVIADO;