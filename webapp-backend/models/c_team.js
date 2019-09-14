var db = require('../dbconnection');

var TABELA = 'C_TIME',
    ID =                    'ID'                ,
    ID_HACKATHON=           'ID_HACKATHON'      ,
    OBRIGATORIO =           'OBRIGATORIO'       ,
    UXUI=                   'UX/UI'             ,
    DEV_FRONT =             'DEV_FRONT'         ,
    DEV_BACK=               'DEV_BACK'          ,
    ANALISTA_NEGOCIOS =     'ANALISTA_NEGOCIOS' ,
    MARKETING=              'MARKETING'         ;

var C_TIME = {
    selectAll: function (data,callback) {
        var queryString = "SELECT "
                            + "C_TIME." + ID                    + ", "
                            + "C_TIME." + ID_HACKATHON          + ", "
                            + "C_TIME." + OBRIGATORIO           + ", "
                            + "C_TIME." + UXUI                  + ", "
                            + "C_TIME." + DEV_FRONT             + ", "
                            + "C_TIME." + DEV_BACK              + ", "
                            + "C_TIME." + ANALISTA_NEGOCIOS     + ", "
                            + "C_TIME." + MARKETING             + 
                            " FROM "  + TABELA + " WHERE " + ID_HACKATHON + " = "+ data.id_hackathon;

        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + ID_HACKATHON          + ", "
                            + OBRIGATORIO           + ", "
                            + UXUI                  + ", "
                            + DEV_FRONT             + ", "
                            + DEV_BACK              + ", "
                            + ANALISTA_NEGOCIOS     + ", "
                            + MARKETING             + 
                            ") SELECT ?,? WHERE NOT EXISTS (SELECT * FROM C_TIME WHERE NOME = "+"'"+data.nome+"'"+")";
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
                            +   ID_HACKATHON            + " = ? ,"
                            +   OBRIGATORIO             + " = ? ,"
                            +   UXUI                    + " = ? ,"
                            +   DEV_FRONT               + " = ? ,"
                            +   DEV_BACK                + " = ? ,"
                            +   ANALISTA_NEGOCIOS       + " = ? ,"
                            +   MARKETING               + " = ? ,"
                            + " WHERE " +  ID           + " = ? "

        var DATA_FIELDS = [
            data.nome               ,
            data.id                      
        ];

        return db.query(queryString, DATA_FIELDS, callback);
    }, 
};
module.exports = C_TIME;