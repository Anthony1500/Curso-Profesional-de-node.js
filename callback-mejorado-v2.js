const fs = require('fs/promises');
const EventEmiter = require('events');

class FileReadEmitter extends EventEmiter {
async readFile(file){
    this.emit('beforeRead',file);
    try {
        const data = await fs.readFile(file,'utf8');
        this.emit('read',file,data);
        this.emit('afterRead',file);
    } catch (error) {
        this.emit('Error',error);
    }
}
}

const fileReadEmitter = new FileReadEmitter();

fileReadEmitter.on("read",(file,data)=>{
    console.log(`File ${file} read successfully :)`, data);
   
});
fileReadEmitter.on("error",(error)=>{
    console.error(`There was an error: ${error.message}`);
   
});
fileReadEmitter.on('beforeRead',(file)=>{
    console.log(`Reading file: ${file} `);
});
fileReadEmitter.on('aftereRead',(file)=>{
    console.log(`Finishing reading`,file);
});


(async ()=>{
    await fileReadEmitter.readFile('archivo1.txt');
    await fileReadEmitter.readFile('archivo2.txt');
    await fileReadEmitter.readFile('archivo3.txt');
})();