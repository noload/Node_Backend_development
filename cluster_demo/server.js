const express = require('express')
const cluster = require('cluster')

const os = require('node:os')

const cpus = os.availableParallelism()

console.log("total cpus : ",cpus);

if (cluster.isPrimary) {

    console.log("primary server : " ,process.pid);
    for (i=0; i <cpus; i++) {
        cluster.fork()
    }
}else{

    const app = express();

    app.get("/",(req,res)=>{
        res.send(`Server using process : ${process.pid}`)
    })

    app.listen(3000,()=>{
        console.log(`Server started on port 3000`);
    })
}
