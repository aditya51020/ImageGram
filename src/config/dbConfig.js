import mongoose from "mongoose";
import { DB_URL } from './serverConfig.js';


export default async function ConnectedDB(){
    try{
        await mongoose.connect(DB_URL)
        console.log('connected to MongoDB');
        
    }catch(error){
        console.log('somthing went wroung while connecting');
        console.log("print error",error);
        
    }
}
