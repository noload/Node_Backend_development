const fs = require("fs");
const filePath = "biodata.txt";
console.log("*****************");
// try{

   

//     const fileContent =fs.readFile(filePath,'utf8');
//     console.log(fileContent);

// }catch(err){
//     console.error(err.message)
// }

// fs.readFile(filePath,"utf-8",(err,data)=>{
//     if (err) {
//         console.error(err);
//         return
//     }
//     console.log(data);
// })

// fs.writeFile("output.txt","heloo this is vaibhav",(err)=>{
//         if (err) {
//             console.error(err);
//             return
//         }
//         console.log("data updated ");
//     })

    fs.appendFile("output.txt","heloo this is vaibhav",(err)=>{
        if (err) {
            console.error(err);
            return
        }
        console.log("data updated ");
    })




