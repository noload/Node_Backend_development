const fs= require("fs");
const fileName =  "demo.json";
// fs.readFile(fileName,"utf-8",(err,data)=>{
//     if(err){
//         console.log(err.message);
//     }data

//     const jsonObj = JSON.parse(data)

//     console.log(jsonObj);
// })


const jsonData=[
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      genre: 'Fiction'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      genre: 'Classic'
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      genre: 'Dystopian'
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      year: 1937,
      genre: 'Fantasy'
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
      year: 1997,
      genre: 'Fantasy'
    }
  ]


  jsonString=JSON.stringify(jsonData)
  fs.writeFile("jsonData.txt",jsonString,(err)=>{
    if(err){
        console.log(err)
    }
  })

// fs.readFile(fileName,"utf-8",(err,data)=>{
//     if(err){
//         console.log(err.message);
//     }data

//     const jsonObj = JSON.parse(data)

//     console.log(jsonObj);
// })