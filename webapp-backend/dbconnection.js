var mysql = require('mysql');

var connection = mysql.createConnection({

    host: '162.241.74.207',
    user: 'vitorliv_HT',
    port: '3306',
    password: 'x$LB!(e0&[{!',
    database: 'vitorliv_HeroTeam'

});
module.exports = connection;