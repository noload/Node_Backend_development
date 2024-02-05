import {client} from './db'

async function insertToUser() {
    await client.connect()

    const userInsert = "insert into users(username,email,password) values ($1,$2,$3)";
    const userValues=["Vaibhav","Vaibhav@gmail.com","vk12345"]


    const addresInsert = 'insert into address(user_id,city,country,street,pincode) values ($1,$2,$3,$4,$5)'

    const addressValue =[1,"mulund","India","mulund-street",580022]
    const user =await client.query(userInsert,userValues);
    const addr =await client.query(addresInsert,addressValue);
    console.log(user);
    console.log(addr);
    

}

insertToUser()