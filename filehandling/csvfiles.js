// const fs=require("fs");
// const csv = require("csv-parser");
// const fileName = "file.csv";
// const result = [];
// fs.createReadStream(fileName)
//   .pipe(csv())
//   .on("data", (data) => {
//     result.push(data);
//   })
//   .on("end", () => {
//     console.log("csv file processed");
//     console.log(result);
//   })
//   .on("error", (error) => {
//     console.error("error reading the file", error.message);
//   });


  // writing data to a CSV file

  const fs=require("fs");
  const csv = require("fast-csv");
  const fileName = "test.csv";
  const data = [{name:"dileep", age: 22, salary: 200},
                  {name:"dileep", age: 22, salary: 200},
                  {name:"dileep", age: 22, salary: 200}];

const ws = fs.createWriteStream(fileName);
csv
.write(data,{headers:true})
.pipe(ws)
.on("end", () => {
    console.log("csv file written succesfully");
  })
  .on("error", (error) => {
    console.error("error reading the file", error.message);
  });