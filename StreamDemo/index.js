const fs = require('fs')
const transformStream = require('stream');
let fileStream = fs.createReadStream(__dirname+'/index.txt');
let outputStream = process.stdout;
let middleStream = new transformStream.Transform({
    transform(chunk,enc,nextCB){
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(nextCB,1000)
    }
});


// fileStream.pipe(outputStream)
let newReadableStream = fileStream.pipe(middleStream)
newReadableStream.pipe(outputStream)




