var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'team52truii.heliohost.org',
    user: 'truii52_project',
    password: 'Release',
    database: 'truii52_Keys'
});

var key = {
    apiClient: "",
    apiKey: ""
}

    connection.connect();
    //template for now
    connection.query('SELECT * FROM ProjectTable WHERE Name="Yelp";', function (error, results, fields) {
        if (error){
            console.log(error);
        }
        key.apiClient = results[0].ApiKey;
        key.apiKey = results[0].ApiSecret;
        return key;
    });
    
    connection.end();