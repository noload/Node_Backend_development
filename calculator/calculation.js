const inputArr = document.querySelectorAll('input');
const num1=inputArr[0].value;
const num2=inputArr[1].value;

// const btn = document.querySelector('button');
// btn.addEventListener('click',add);


// async function addition(){
//     const response = await fetch(`http://localhost:3000/sum?a=${num1}&b=${num2}`);
//     const jsondata = await response.json()

//     const result = document.querySelector('#result')
//     result.innerHTML=``
//     result.innerHTML=`Result is ${jsondata.result}`
// }

async function add(){
    const response = await fetch(`http://localhost:3000/add`,
    {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        //make sure to serialize your JSON body
        body: JSON.stringify({
          a: num1,
          b: num2
        })
      });
    
    
    const jsondata = await response.json()
    const result = document.querySelector('#result')
    result.innerHTML=``
    result.innerHTML=`Result is ${jsondata.result}`
}