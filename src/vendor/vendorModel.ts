import mongoose from "mongoose";
import dbConnection from '../dbConfig';

const vendorSchema = new mongoose.Schema({
    firstname:{type: String, required:true},
    lastname:{type: String, required:true},
    address:{type: String, required:true},
    accountOf:{type: String, required:true},
    mobile:{type: String, required:true},
    phone:{type: String},
    email:{type: String},
    gst:{type:String, required:true},
    date:{type: Date, default: Date.now}
}

);

const vendorModel = dbConnection.model('vendors',vendorSchema);
export default vendorModel;
