
let a = [30,20,50,1,49,20,40];
function thirdLargest(a) {
    console.log(a);
    let first=-Infinity, second=-Infinity,third=-Infinity;
for (const item of a) {
    if (item > first) {
        console.log(item,first,second,third);
        third = second;
        second = first;
        first = item;
        console.log(item,first,second,third);

    }else if(item > second && item < first){
        console.log(item,first,second,third);

        third = second;

        second = item;
        console.log(item,first,second,third);

    }else if(item >  third && item < second){
        console.log(item,first,second,third);

        third = item;
        console.log(item,first,second,third);

    }
    console.log(item);
}
return {third,first,second};
}
console.log(thirdLargest(a));

function findThirdLargest(arr) {
    if (arr.length < 3) {
        throw new Error("Array must have at least three elements.");
    }

    // Initialize three variables to track the top 3 largest values
    let first = -Infinity, second = -Infinity, third = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            // Update all three if current element is the largest
            third = second;
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            // Update second and third if current element is the second largest
            third = second;
            second = arr[i];
        } else if (arr[i] > third && arr[i] < second) {
            // Update third if current element is the third largest
            third = arr[i];
        }
    }

    if (third === -Infinity) {
        throw new Error("Array does not have three distinct elements.");
    }

    return third;
}

// Example usage:
const array = [5, 2, 8, 6, 1, 8, 10];
try {
    const thirdLargest = findThirdLargest(array);
    console.log("The 3rd largest element is:", thirdLargest);
} catch (error) {
    console.error(error.message);
}


function builtIn(a){
    if (a.length < 3) {
        throw  new  Error('array size is not upto mark')
    }

    const arr = [...new Set(a)].sort((a,b)=>b - a);
    if (arr.length < 3) {
        throw  new  Error('array size is not upto mark')
    }

    return arr[2];
}

console.log(builtIn(array));

function find2Largest(a){
    let first=-Infinity, second = -Infinity;
    for (const item of a) {
        if (item > first) {
            second = first;
            first = item;
        }else if(item > second && item < first){
            second = item;
        }
    }
    return second
}

console.log("Second largest",find2Largest(a));