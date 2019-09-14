var db = require('../dbconnection');

var TABELA = 'CONVITE_RECEBIDO',
    ID =                    'ID'            ,
    ID_USUARIO=             'ID_USUARIO'    ,
    ID_CONVIDA=             'ID_CONVIDA'    ,
    MENSAGEM=               'MENSAGEM'      ;

var CONVITE_RECEBIDO = {
    selectConviteRecebido: function (data,callback) {
        var queryString = "SELECT "
                            + "CONVITE_RECEBIDO." + ID                + ", "
                            + "CONVITE_RECEBIDO." + ID_USUARIO        + ", "
                            + "CONVITE_RECEBIDO." + ID_CONVIDA        + ", "
                            + "CONVITE_RECEBIDO." + MENSAGEM          +
                            " FROM "  + TABELA + ID_USUARIO + " = " + data.id ;
        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + ID_USUARIO      + ", "
                            + ID_CONVIDA      + ", "
                            + MENSAGEM        + 
                            ") SELECT ?,?,? WHERE NOT EXISTS (SELECT * FROM CONVITE_RECEBIDO WHERE ID_CONVIDA = "+"'"+data.id_convida+"'"+")";
        var DATA_FIELDS = [ 
            data.id_usuario       ,
            data.id_convida       ,
            data.mensagem      
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
module.exports = CONVITE_RECEBIDO;