import {client} from './db'

async function createTable() {
    await client.connect()

    const user = await client.query(`
    create table users(
        id serial primary key,
        username varchar(250) unique not null,
        email varchar(250) unique not null,
        password varchar(250) not null,
        create_At timestamp with time zone default current_timestamp
    )
    `)

    const tasks = await client.query(`
    create table tasks(
        id serial primary key,
        user_id integer not null,
        title varchar(250) not null,
        description varchar(250) not null,
        created_At timestamp with time zone default current_timestamp,
        foreign key (user_id) references users(id) on delete cascade

    )`)
    console.log(tasks);
    

    const address = await client.query(`
    create table address(
        id serial primary key,
        user_id integer not null,
        city varchar(250) not null,
        country varchar(250) not null,
        street varchar(250) not null,
        pincode integer not null,
        created_At timestamp with time zone default current_timestamp,
        foreign key (user_id) references users(id) on delete cascade

    )`)

    console.log(user);
    console.log(address);
    
    
}

createTable()