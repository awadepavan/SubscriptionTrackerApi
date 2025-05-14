import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env.js';

if(!DB_URI){
    throw new Error('please define the mongodb_uri envirment variable inside .env.<development/production>.local');    
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in ${NODE_ENV} mode`);
        
    } catch (error) {
        console.log('Error connectinng to database',error);

        process.exit(1);
        
    }
}

export default connectToDatabase;