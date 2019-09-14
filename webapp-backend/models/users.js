var db = require('../dbconnection');

var TABELA = 'USUARIO',
    ID =                  'ID'                  ,
    ID_TIME=              'ID_TIME'             ,
    ID_HACKATHON=         'ID_HACKATHON'        ,
    ORGANIZADOR=          'ORGANIZADOR'         ,
    NOME_COMPLETO=        'NOME_COMPLETO'       ,
    DISPONIVEL=           'DISPONIVEL'          ,
    AREA_ATUACAO=         'AREA_ATUACAO'        ,
    CONHECIMENTO=         'CONHECIMENTO'        ,
    FACEBOOK=             'FACEBOOK'            ,
    LINKEDIN=             'LINKEDIN'            ,
    GITHUB=               'GITHUB'              ,
    OUTRO=                'OUTRO'               ,
    NICK=                 'NICK'                ,
    EMAIL=                'EMAIL'               ,
    SENHA=                'SENHA'               ,
    PHONE=                'PHONE'               ,
    NASCIMENTO=           'NASCIMENTO'          ,
    SEXO=                 'SEXO'                ,
    HORARIO_DISPONIVEL=   'HORARIO_DISPONIVEL'  ,
    STATUS=               'STATUS'              ,
    EXPERIENCIA=          'EXPERIENCIA'         ,
    PROFISSAO=            'PROFISSAO'           ;

var USUARIO = {
    login: function (data,callback) {
        var queryString = "SELECT "
                            + "USUARIO." + ID               + ", "
                            + "USUARIO." + NICK             + ", "
                            + "USUARIO." + EMAIL            + ", "
                            + "USUARIO." + AREA_ATUACAO     + ", "
                            + "USUARIO." + CONHECIMENTO     + ", "
                            + "USUARIO." + FACEBOOK         + ", "
                            + "USUARIO." + LINKEDIN         + ", "
                            + "USUARIO." + GITHUB           + ", "
                            + "USUARIO." + OUTRO            + ", "
                            + "USUARIO." + PROFISSAO        + 
                            
                            " FROM " + TABELA + " WHERE " + NICK +" = ? OR " + EMAIL + " = ? AND" + " SENHA = ?";

        var DATA_FIELDS = [ 
            data.nome       ,
            data.nome       ,
            data.senha      ,
            ];

        return db.query(queryString,DATA_FIELDS , callback);
    },
    selectAll: function (callback) {
        var queryString = "SELECT "
                            + "USUARIO." + ID                   + ", "
                            + "USUARIO." + ID_TIME              + ", "
                            + "USUARIO." + ID_HACKATHON         + ", "
                            + "USUARIO." + ORGANIZADOR          + ", "
                            + "USUARIO." + DISPONIVEL           + ", "
                            + "USUARIO." + NICK                 + ", "
                            + "USUARIO." + NOME_COMPLETO        + ", "
                            + "USUARIO." + SENHA                + ", "
                            + "USUARIO." + EMAIL                + ", "
                            + "USUARIO." + PROFISSAO            + ", "
                            + "USUARIO." + AREA_ATUACAO         + ", "
                            + "USUARIO." + CONHECIMENTO         + ", "
                            + "USUARIO." + FACEBOOK             + ", "
                            + "USUARIO." + LINKEDIN             + ", "
                            + "USUARIO." + GITHUB               + ", "
                            + "USUARIO." + OUTRO                + ", "
                            + "USUARIO." + PHONE                + ", "
                            + "USUARIO." + NASCIMENTO           + ", "
                            + "USUARIO." + SEXO                 + ", "
                            + "USUARIO." + HORARIO_DISPONIVEL   + ", "
                            + "USUARIO." + STATUS               + ", "
                            + "USUARIO." + EXPERIENCIA          + 
                            " FROM "     + TABELA;

        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + ID_TIME               + ", "
                            + ID_HACKATHON          + ", "
                            + ORGANIZADOR           + ", "
                            + DISPONIVEL            + ", "
                            + NICK                  + ", "
                            + NOME_COMPLETO         + ", "
                            + SENHA                 + ", "
                            + EMAIL                 + ", "
                            + PROFISSAO             + ", "
                            + AREA_ATUACAO          + ", "
                            + CONHECIMENTO          + ", "
                            + FACEBOOK              + ", "
                            + LINKEDIN              + ", "
                            + GITHUB                + ", "
                            + OUTRO                 + ", "
                            + PHONE                 + ", "
                            + NASCIMENTO            + ", "
                            + SEXO                  + ", "
                            + HORARIO_DISPONIVEL    + ", "
                            + STATUS                + ", "
                            + EXPERIENCIA           +
                            ") SELECT ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? WHERE NOT EXISTS (SELECT * FROM USUARIO WHERE NICK = "+"'"+data.nick+"'"+" OR EMAIL =" +"'"+data.email+"'"+")";
        var DATA_FIELDS = [ 

            data.id_time                ,
            data.id_hackathon           ,
            data.organizador            ,
            data.disponivel             ,
            data.nick                   ,
            data.nome_completo          ,
            data.senha                  ,
            data.email                  ,
            data.profissao              ,
            data.area_atuacao           ,
            data.conhecimento           ,
            data.facebook               ,
            data.linkedin               ,
            data.github                 ,
            data.outro                  ,
            data.phone                  ,
            data.nascimento             ,
            data.sexo                   ,
            data.horario_disponivel     ,
            data.status                 ,
            data.experiencia            
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
                            + ID_HACKATHON          + " = ? , "
                            + ORGANIZADOR           + " = ? , "
                            + DISPONIVEL            + " = ? , "
                            + NICK                  + " = ? , "
                            + NOME_COMPLETO         + " = ? , "
                            + SENHA                 + " = ? , "
                            + EMAIL                 + " = ? , "
                            + PROFISSAO             + " = ? , "
                            + AREA_ATUACAO          + " = ? , "
                            + CONHECIMENTO          + " = ? , "
                            + FACEBOOK              + " = ? , "
                            + LINKEDIN              + " = ? , "
                            + GITHUB                + " = ? , "
                            + OUTRO                 + " = ? , "
                            + PHONE                 + " = ? , "
                            + NASCIMENTO            + " = ? , "
                            + SEXO                  + " = ? , "
                            + HORARIO_DISPONIVEL    + " = ? , "
                            + STATUS                + " = ? , "
                            + EXPERIENCIA           + " = ? , "
                            + PROFISSAO             + " = ? "
                            + "WHERE "+ ID +" = ?" ;
        var DATA_FIELDS = [
            data.id_hackathon           ,
            data.organizador            ,
            data.disponivel             ,
            data.nick                   ,
            data.nome_completo          ,
            data.senha                  ,
            data.email                  ,
            data.profissao              ,
            data.area_atuacao           ,
            data.conhecimento           ,
            data.facebook               ,
            data.linkedin               ,
            data.github                 ,
            data.outro                  ,
            data.phone                  ,
            data.nascimento             ,
            data.sexo                   ,
            data.horario_disponivel     ,
            data.status                 ,
            data.experiencia            ,
            data.profissao              ,
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