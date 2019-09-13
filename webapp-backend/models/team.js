var db = require('../dbconnection');

var TABELA = 'TIME',
    ID =                  'ID'              ,
    ID_HACKATHON=         'ID_HACKATHON'    ,
    NOME=                 'NOME'            ,
    TEAM_LEADER=          'TEAM_LEADER'     ,
    DESCRICAO=            'DESCRICAO'       ,
    CONHECIMENTO=         'CONHECIMENTO'    ,
    N_PARTICIPANTE=       'N_PARTICIPANTE'  ,
    LINKEDIN=             'LINKEDIN'        ,
    COMPLETO=             'COMPLETO'        ,
    OUTRO=                'OUTRO'           ,
    DEVS=                 'DEVS'            ,
    DESIGNERS=            'DESIGNERS'       ,
    BUSINESS=             'BUSINESS'        ,
    MARKETING=            'MARKETING'       ;

var TIME = {
    selectAll: function (callback) {
        var queryString = "SELECT "
                            + "TIME." + ID                + ", "
                            + "TIME." + ID_HACKATHON      + ", "
                            + "TIME." + TEAM_LEADER       + ", "
                            + "TIME." + NOME              + ", "
                            + "TIME." + DESCRICAO         + ", "
                            + "TIME." + N_PARTICIPANTE    + ", "
                            + "TIME." + COMPLETO          + ", "
                            + "TIME." + DEVS              + ", "
                            + "TIME." + DESIGNERS         + ", "
                            + "TIME." + BUSINESS          + ", "
                            + "TIME." + MARKETING         + 
                            " FROM "  + TABELA            ;

        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + ID_HACKATHON      + ", "
                            + TEAM_LEADER       + ", "
                            + NOME              + ", "
                            + DESCRICAO         + ", "
                            + N_PARTICIPANTE    + ", "
                            + COMPLETO          + ", "
                            + DEVS              + ", "
                            + DESIGNERS         + ", "
                            + BUSINESS          + ", "
                            + MARKETING         + 
                            ") SELECT ?,?,?,?,?,?,?,?,?,? WHERE NOT EXISTS (SELECT * FROM TIME WHERE NOME = "+"'"+data.nome+"'"+")";
        var DATA_FIELDS = [ 
            data.id_hackathon       ,
            data.team_leader        ,
            data.nome               ,
            data.descricao          ,
            data.n_participante     ,
            data.completo           ,
            data.devs               ,
            data.designers          ,
            data.business           ,
            data.marketing          
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
                            + TEAM_LEADER       + " = ? , "
                            + NOME              + " = ? , "
                            + DESCRICAO         + " = ? , "
                            + N_PARTICIPANTE    + " = ? , "
                            + COMPLETO          + " = ? , "
                            + DEVS              + " = ? , "
                            + DESIGNERS         + " = ? , "
                            + BUSINESS          + " = ? , "
                            + MARKETING         + " = ? "
                            + " WHERE " +  ID   + " = ? "

        var DATA_FIELDS = [
            data.team_leader        , 
            data.nome               ,
            data.descricao          ,
            data.n_participante     ,
            data.completo           ,
            data.devs               ,
            data.designers          ,
            data.business           ,
            data.marketing          ,
            data.id                      
        ];

        return db.query(queryString, DATA_FIELDS, callback);
    }, 
};
module.exports = TIME;