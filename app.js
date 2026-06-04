const fs = require('fs');
const pth = require('path');

const promiseReadSync = (path)=>{
    return new Promise((resolve,reject)=>{
       fs.readdir(path, (err,data)=>{
        if(err){
            reject(err)
        }
        else{
            resolve(data)
        }
       })       
    })
}
const folderMap = {
  images: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
  documents: ['.pdf', '.doc', '.docx', '.txt'],
  videos: ['.mp4', '.mov', '.avi'],
  audio: ['.mp3', '.wav'],
};

async function start(path){
    try {
        const items = await promiseReadSync(path);
        
        items.forEach(element => {
            let oldPath = pth.join(path,element)
            if(fs.statSync(oldPath).isDirectory()){
                return
            }
            for (const [type , extension] of Object.entries(folderMap)) {
                let ext = pth.extname(element)
                if(extension.includes(ext)===true){
                    let dirPath = pth.join(path,type)
                    if(!fs.existsSync(dirPath)){
                        fs.mkdirSync(dirPath)
                    }
                    // let oldPath = pth.join(path,element)
                    let newPath = pth.join(path,type,element)
                    fs.renameSync(oldPath,newPath) 
                }
                      
            }
        });
        
        



    } catch (error) {
        console.log(error);
        
    }
}

start('./sub-folder')