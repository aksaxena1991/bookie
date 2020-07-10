import mongoose from "mongoose";
import dbConnection from '../dbConfig';

const ledegrsSchema = new mongoose.Schema({
    vendorID:{type: String, required:true},
    debit:{type: String, required:true},
    credit:{type: String, required:true},
    balance:{type: String, required:true},
    qty:{type: String, required:true},
    qtyMeasure:{type: String, enum:['Kg','Quin','Ton']},
    paymentVIA:{type: String, required:true, enum:['IMPS','NEFT','RTGS','CASH']},
    cbFolio:{type:String},
    date:{type: Date, required:true,default: Date.now}
}

);
dbConnection.createCollection('ledgers',function(err){
    if(err !== null) {
        console.log('Unable to create ledgers collection');
    }else {
        console.log('Ledgers collection has been created successfully');
    }
})
const ledgerModel = dbConnection.model('ledgers',ledegrsSchema);
export default ledgerModel;
