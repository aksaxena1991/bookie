import mongoose from "mongoose";
import dbConnection from '../dbConfig';

const vendorSchema = new mongoose.Schema({
    firstname:{type: String, required:true},
    lastname:{type: String, required:true},
    address:{type: String, required:true},
    accountOf:{type: String, required:true},
    mobile:{type: String, required:true},
    phone:{type: String},
    email:{type: String, unique:true},
    gst:{type:String, required:true},
    date:{type: Date, default: Date.now}
}

);
dbConnection.createCollection('vendors',function(err){
    if(err !== null) {
        console.log('Unable to create vendors collection');
    }else {
        console.log('Vendors collection has been created successfully');
    }
})
const vendorModel = dbConnection.model('vendors',vendorSchema);
export default vendorModel;
