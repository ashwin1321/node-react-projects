const sql = require('mssql/msnodesqlv8');

const config = {
    database: 'userLogin',
    server: 'localhost',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true,
        useUTC: false
    }          
}       

sql.connect(config, (err) => {
    if (err) console.log(err);
    else console.log('Database connected');
})

module.exports = sql;