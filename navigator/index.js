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