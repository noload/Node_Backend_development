const product=require("./prod")

function addProducts(name, price) {
    product.push({ name: name, price: price });
  }


 
  function deleteproducts(name, price) {
    //write
    let index =0
    product.forEach((pro,index)=>{
        if(pro.name == name){
            product.pop(index);
        }
        index++;
    })
  }
  
module.exports={addProducts,deleteproducts};