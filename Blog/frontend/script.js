let dataObj = document.querySelector('.data')

async function getData() {
    let responseData = await fetch('http://localhost:3000/blogs');
    let jsonData = await responseData.json();
    let data = jsonData.data
    newData =JSON.stringify(jsonData.data[0]);
    dataObj.innerHTML =`${newData}`
}
