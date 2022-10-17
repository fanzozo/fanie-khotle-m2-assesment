const fs = require('fs')

fs.open('file.txt','w',(err,file)=> {
    if (err){
        console.error(err);
    return;
}

    console.log('file opened');
    
})




 const content = "winner of 2021 mtn app of the year campus catergory is Uniwise,it is developed OGO studio"
fs.writeFile('file.txt',content,err => {
    if (err) {
        console.error(err);
        return;
    }

})

fs.readFile('file.txt','utf8',(err,data)=> {
    if (err){
        console.error(err);
    return;
}

    console.log(data);
    
})
