var db = require('../dbconnection');

var TABELA = 'ORGANIZADORES'      ,
    ID =          'ID'            ,
    ID_USUARIO=   'ID_USUARIO'    ,
    ID_HACKATHON= 'ID_HACKATHON'  ;

var ORGANIZADORES = {
    selectOrganizadores: function (data,callback) {
        var queryString = "SELECT "
                            + "ORGANIZADORES." + ID_USUARIO       + ", "
                            + "ORGANIZADORES." + ID_HACKATHON     +
                            " FROM "  + TABELA + " WHERE " + ID_HACKATHON + " = "+data.id_hackathon;

        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + ID_USUARIO   + ", "
                            + ID_HACKATHON + 
                        
                            ") VALUES (?,?);";
        var DATA_FIELDS = [ 

            data.id_usuario    ,
            data.id_hackathon           
  
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
module.exports = ORGANIZADORES;