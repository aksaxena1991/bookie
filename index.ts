import cors from "cors";
import express from 'express';
import * as dotenv from 'dotenv';

import helmet from "helmet";
import * as vendor from './src/vendor';
import * as ledger from './src/ledgers';
import * as stock from './src/stock';
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
app.listen(PORT, ()=>{
    console.log(`Port number as: ${PORT}`);
});
app.get('/', (req, res) => res.send('Welcome to NodeJs App using TypeScript'));
app.get('/vendor/fetchAll',vendor.fetchAll);
app.post('/vendor/add',vendor.create);
app.put('/vendor/update',vendor.update);
app.delete('/vendor/delete',vendor.remove);

app.get('/ledger/fetchAll',ledger.fetchAll);
app.post('/ledger/add',ledger.create);
app.put('/ledger/update',ledger.update);
app.delete('/ledger/delete',ledger.remove);

app.get('/stock/fetchAll',stock.fetchAll);
app.post('/stock/add',stock.create);
app.put('/stock/update',stock.update);
app.delete('/stock/delete',stock.remove);