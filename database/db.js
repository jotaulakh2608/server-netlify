import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {useNewUrlParser:true},
    (err)=>{
        if(!err){
            console.log('conection done');
        }
        else{
            console.log('error in db conection');
        }
    })

