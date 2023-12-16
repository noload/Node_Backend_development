const p=require("./prod")

function display() {
  p.forEach((pro)=>{
    console.log(`Name:${pro.name}`);
    console.log(`Price:${pro.price}`);
  })
}

module.exports=display;