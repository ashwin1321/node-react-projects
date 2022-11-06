const sql = require ('mssql/msnodesqlv8');

// database configuration

var config = {
    // username: 'sa',
    database: 'tests',
    server: 'localhost',
     driver: 'msnodesqlv8',
    options: {
        trustedConnection: true,  
        trustServerCertificate: true
    }
}

// connect to your database

sql.connect(config).then(pool => {
    if (pool.connecting) {
      console.log('Connecting to the database...')
    }
    if (pool.connected) {
      console.log('Connected to SQL Server')
    }
  })