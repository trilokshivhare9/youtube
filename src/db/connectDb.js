import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`Database connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`Error in connection: ${error}`);
    }
};

export default connectDb;
