// console.log(navigator.appName); 
// console.log(navigator.appVersion); // Outputs version details like "5.0 (Windows NT 10.0; Win64; x64)..."
// console.log(navigator.userAgent);
// // Example output: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36..."

// function secess(position){
//     console.log(position);
// }
// function errorFn(){
//     console.log("failed to get location");
// }
// navigator.geolocation.getCurrentPosition(secess,errorFn)

// console.log(navigator.onLine); // return true or false
// navigator.mediaDevices.enumerateDevices()
//   .then(devices => {
//     devices.forEach(device => {
//       console.log(`${device.kind}: ${device.groupId}`);
//     });
//   })
//   .catch(error => console.error('Error accessing devices:', error));

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
//       .then((registration) => {
//         console.log('Service Worker registered with scope:', registration.scope);
//       })
//       .catch((error) => {
//         console.error('Service Worker registration failed:', error);
//       });
//   }

//   navigator.permissions.query({ name: 'persistent-storage' })
//   .then((permissionStatus) => {
//     console.log(`Geolocation permission: ${permissionStatus.state}`);
//   });


//closure example

// function operation(){
//     let num1=10;
//     let num2 = 20;
//     function add(){
//         console.log("a + b " + num1, num2 ,  num1 + num2);
//     }
//     function incrementNum1(){
//         num1+=1;
//     }
//     function incrementNum2(){
//         num2+=1
//     }

//     return {add,incrementNum1,incrementNum2}
// }

// const {add,incrementNum1,incrementNum2} = operation();
// add()
// incrementNum1();
// add()
// incrementNum2()
// add()


function factorial(num){
    let result =0;
    for(let i=1;i<=num;i++){
        result+=i
    }
    console.log("Factorial of "+num+ " is "+result);
}

// function memorization(cb){
//     const cache ={};
//     if (args in cache) {
//         console.log("fetching from cache");
//         console.log("Factorial of "+arg+ " is "+cache[arg]);

//     }

//     return result = cb()
// }

// memorization(factorial(5))


function memoize(fn) {
    const cache = {};
  
    return function (arg) {
      if (arg in cache) {
        console.log('Fetching from cache:', arg);
        return cache[arg];
      }
  
      console.log('Calculating result:', arg);
      const result = fn(arg);
      cache[arg] = result;
      return result;
    };
  }
  
  const facto = memoize(factorial);
  console.log(facto(5)); 
  console.log(facto(5)); 
   