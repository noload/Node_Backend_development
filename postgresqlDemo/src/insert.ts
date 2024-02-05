import {client} from './db'

async function insertToUser() {
    await client.connect()

    const inserQuery = "insert into users(username,email,password) values ($1,$2,$3)";
    const values=["Neeraj","Neeraj@gmail.com","123456"]

    const resp =await client.query(inserQuery,values);
    console.log(resp);
    

}

insertToUser()