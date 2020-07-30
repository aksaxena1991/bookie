import mongoose from "mongoose";
import dbConnection from '../dbConfig';

const stockSchema = new mongoose.Schema({
    item:{type: String, required:true},
    qty:{type: String, required:true},
    unit:{type: String, required:true, enum:['Kg','Ton','Quntl','Gram']},
    rate:{type: String, required:true},
    amount:{type: String, required:true},
    gst:{type: String},
    billNo:{type: String, unique:true},
    purchaseFrom:{type:String, required:true},
    date:{type: Date, default: Date.now}
}

);
dbConnection.createCollection('stock',function(err){
    if(err !== null) {
        console.log('Unable to create stock collection');
    }else {
        console.log('Stock collection has been created successfully');
    }
})
const stockModel = dbConnection.model('stock',stockSchema);
export default stockModel;
