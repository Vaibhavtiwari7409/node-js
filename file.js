//const f = require('fs')
//console.log(f)
//async
//f.readFile(__dirname+"/pn.txt","utf8",(err,data)=>{   //utf8 file format hota //event callback es6
    //if(err) throw err;
    //console.log(data);
//});
//console.log("hello gwalior")

const data  =f.readFileSync(__dirname+"/pn.txt","utf-8");
console.logo(data);
console.log("Hello gwalior");

try {const data  =f.readFileSync(__dirname+"/pn.txt","utf-8");
console.logo(data);
    
} catch (error) {
    console.log(error)
    
}

console.log("Hello gwalior");