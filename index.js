const fs = require('fs');
const repthis="sarvagya";
const repwith="inter";
const preview=false;
try {
  fs.readdir(".",  (err,data)=>{
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let newFile="data/"+item.replaceAll(repthis,repwith)
        if(!preview){
         fs.rename("data/"+item, newFile, ()=>{
         console.log("Rename Success");
        } )   }
        else{
            if("data/"+item != newFile)
            console.log(item +" will be renamed to "+ newFile)
        }
    }
  });
} catch (err) {
  console.error(err);
}
