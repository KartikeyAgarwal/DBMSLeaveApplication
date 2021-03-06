const {Pool, Client} = require('pg')
const secrets = require('../secrets')

const {parseEmployees} = require('../entities/Employee')

async function performTest1(){
    let finalres = null;
    try{
        let client = new Client(
            secrets.pgsql
        )        
        await client.connect();

        res = await client.query('SELECT * from Employee2');
        console.log("received results = ", res);
        client.end();
        finalres = res;
    }catch(e){
        console.error("DBMS error", e);
        finalres = -1;
    }
    return finalres;
}

async function performTest2(){
    let finalres = null;
    try{
        let client = new Client(
            secrets.pgsql
        )        
        await client.connect();

        let res = await client.query('SELECT * from Employee');
        
        console.log("received unparsed results = ", res);

        let parsedRes = parseEmployees(res['rows'])

        console.log("received results = ", parsedRes);
        client.end();
        finalres = JSON.stringify(parsedRes);
    }catch(e){
        console.error("DBMS error", e);
        finalres = -1;
    }
    return finalres;
}

async function performTest3(){
    return "todo"
}

module.exports = {
    performTest1: performTest1,
    performTest2: performTest2,
    performTest3: performTest3
}


// performTest1();