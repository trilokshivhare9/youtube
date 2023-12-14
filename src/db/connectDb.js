import mongoose from "mongoose"
import { DB_NAME } from "../constants"


const connectDb = async()=>{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);

       console.log(`database connected ${connectionInstance}`);
    } catch (error) {
        console.error(error)
    }
}
export default connectDb