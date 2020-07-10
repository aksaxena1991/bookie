import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();
const uri = `${process.env.MONGO_URI}`;
const dbConnection = mongoose.createConnection(uri,{

    useNewUrlParser: true,

    useCreateIndex: true,

    useUnifiedTopology: true,

    useFindAndModify: false

}
);


export default dbConnection;