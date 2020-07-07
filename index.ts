import cors from "cors";
import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import helmet from "helmet";
import * as vendor from './src/vendor';
dotenv.config();
if(!process.env.PORT){
    console.log("Error in getting PORT");
    process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
const server = app.listen(PORT, ()=>{
    console.log(`Port number as: ${PORT}`);
});
app.get('/', (req, res) => res.send('Welcome to NodeJs App using TypeScript'));
app.get('/vendor/fetchAll',vendor.fetchAll);
app.post('/vendor/add',vendor.create);