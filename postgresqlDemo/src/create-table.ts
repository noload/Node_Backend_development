import {client} from './db'

async function createUserTable() {
    await client.connect()

    const result = await client.query(`
    create table users(
        id serial primary key,
        username varchar(250) unique not null,
        email varchar(250) unique not null,
        password varchar(250) not null,
        create_At timestamp with time zone default current_timestamp
    )
    `)

    console.log(result);
    
}

// createUserTable()
