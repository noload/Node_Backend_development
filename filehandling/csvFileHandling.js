const fs=require("fs");
// const csv=require("csv-parser");
const csv = require("fast-csv");
// const fileName ="employesDetail.csv";

// const result=[];

// fs.createReadStream(fileName)
//   .pipe(csv())
//   .on("data",(data)=>{
//     // console.log(data);
//     result.push(data);
//   })
//   .on("end",()=>{
//     console.log("data processed");
//     console.log(result);
//   })
//   .on("error",(error)=>{
//     console.error(error);
//   })


  //writing data to a csv file
  data=[
    { Name: 'Vaibhav', age: '25', Designation: 'FSD', salary: '50000' },
    {
      Name: 'Shakul',
      age: '30',
      Designation: 'Teacher',
      salary: '90000'
    },
    { Name: 'Neeraj', age: '28', Designation: 'FSD', salary: '60000' }
  ]
 
  const ws = fs.createWriteStream("csvData.txt");
  csv.write(data,{headers:true})
  .pipe(ws)
  .on("end",()=>{
    console.log("file updated successfully");
  })
  .on("error",(error)=>{
    console.log(error);
  })