
var db = require('../dbconnection');

var TABELA = 'HACKATHON',
    ID =                        'ID'                        ,
    NOME=                       'NOME'                      ,
    DATA_INICIO=                'DATA_INICIO'               ,
    TERMINO_FORMACAO_EQUIPE=    'TERMINO_FORMACAO_EQUIPE'   ,
    TERMINO_HACKATHON=          'TERMINO_HACKATHON'         ,
    TOTAL_PARTICIPANTE =        'TOTAL_PARTICIPANTE'        ,
    REGRAS=                     'REGRAS'                    ,
    PREMIO=                     'PREMIO'                    ,
    DURACAO=                    'DURACAO'                   ,
    FORMACAO_ENCERRADA=         'FORMACAO_ENCERRADA'        ,
    FIND_SIMILAR=               'FIND_SIMILAR'              ,
    EXP_SIMILAR=                'EXP_SIMILAR'               ,
    HORARIO_SIMILAR=            'HORARIO_SIMILAR'           ,
    IDADE_SIMILAR=              'IDADE_SIMILAR'             ,
    SEXO_SIMILAR=               'SEXO_SIMILAR'              ,
    EXCLUIR_LATE_USERS=         'EXCLUIR_LATE_USERS'        ;


var HACKATHON = {
    selectAll: function (callback) {
        var queryString = "SELECT "
                            + "HACKATHON." + ID                         + ", "
                            + "HACKATHON." + NOME                       + ", "
                            + "HACKATHON." + DESCRICAO                  + ", "
                            + "HACKATHON." + DATA_INICIO                + ", "
                            + "HACKATHON." + TERMINO_FORMACAO_EQUIPE    + ", "
                            + "HACKATHON." + TERMINO_HACKATHON          + ", "
                            + "HACKATHON." + TOTAL_PARTICIPANTE         + ", "
                            + "HACKATHON." + REGRAS                     + ", "
                            + "HACKATHON." + PREMIO                     + ", "
                            + "HACKATHON." + DURACAO                    + ", "
                            + "HACKATHON." + FORMACAO_ENCERRADA         + ", "
                            + "HACKATHON." + FIND_SIMILAR               + ", "
                            + "HACKATHON." + EXP_SIMILAR                + ", "
                            + "HACKATHON." + HORARIO_SIMILAR            + ", "
                            + "HACKATHON." + IDADE_SIMILAR              + ", "
                            + "HACKATHON." + SEXO_SIMILAR               + ", "
                            + "HACKATHON." + EXCLUIR_LATE_USERS         + 
                            " FROM "  + TABELA            ;

        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + NOME                      + ", "
                            + DESCRICAO                 + ", "
                            + DATA_INICIO               + ", "
                            + TERMINO_FORMACAO_EQUIPE   + ", "
                            + TERMINO_HACKATHON         + ", "
                            + TOTAL_PARTICIPANTE        + ", "
                            + REGRAS                    + ", "
                            + PREMIO                    + ", "
                            + DURACAO                   + ", "
                            + FORMACAO_ENCERRADA        + ", "
                            + FIND_SIMILAR              + ", "
                            + EXP_SIMILAR               + ", "
                            + HORARIO_SIMILAR           + ", "
                            + IDADE_SIMILAR             + ", "
                            + SEXO_SIMILAR              + ", "
                            + EXCLUIR_LATE_USERS        +  
                            ") SELECT ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? WHERE NOT EXISTS (SELECT * FROM HACKATHON WHERE NOME = "+"'"+data.nome+"'"+")";
        var DATA_FIELDS = [ 
            data.nome                       ,
            data.descricao                  ,
            data.data_inicio                ,
            data.termino_formacao_equipe    ,
            data.termino_hackathon          ,
            data.total_participante         ,
            data.regras                     ,
            data.premio                     ,
            data.duracao                    ,
            data.formacao_encerrada         ,
            data.find_similar               ,
            data.exp_similar                ,
            data.horario_similar            ,
            data.idade_similar              ,
            data.sexo_similar               ,
            data.excluir_late_users          
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
                            + NOME                      + " = ? , "
                            + DESCRICAO                 + " = ? , "
                            + DATA_INICIO               + " = ? , "
                            + TERMINO_FORMACAO_EQUIPE   + " = ? , "
                            + TERMINO_HACKATHON         + " = ? , "
                            + TOTAL_PARTICIPANTE        + " = ? , "
                            + REGRAS                    + " = ? , "
                            + PREMIO                    + " = ? , "
                            + DURACAO                   + " = ? , "
                            + FORMACAO_ENCERRADA        + " = ? , "
                            + FIND_SIMILAR              + " = ? , "
                            + EXP_SIMILAR               + " = ? , "
                            + HORARIO_SIMILAR           + " = ? , "
                            + IDADE_SIMILAR             + " = ? , "
                            + SEXO_SIMILAR              + " = ? , "
                            + EXCLUIR_LATE_USERS        + " = ? "
                            + " WHERE " +  ID   + " = ? "

        var DATA_FIELDS = [
            data.nome                       ,
            data.descricao                  ,
            data.data_inicio                ,
            data.termino_formacao_equipe    ,
            data.termino_hackathon          ,
            data.total_participante         ,
            data.regras                     ,
            data.premio                     ,
            data.duracao                    ,
            data.formacao_encerrada         ,
            data.find_similar               ,
            data.exp_similar                ,
            data.horario_similar            ,
            data.idade_similar              ,
            data.sexo_similar               ,
            data.excluir_late_users         ,
            data.id                      
        ];

        return db.query(queryString, DATA_FIELDS, callback);
    }, 
};
module.exports = HACKATHON;