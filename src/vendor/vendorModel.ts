import mongoose from "mongoose";
import dbConnection from '../dbConfig';

const vendorSchema = new mongoose.Schema({
    firstname:{type: String},
    lastname:{type: String},
    address:{type: String},
    accountOf:{type: String},
    mobile:{type: String},
    phone:{type: String},
    email:{type: String},
    gst:{type:String},
    date:{type: Date, default: Date.now}
}

);

const vendorModel = dbConnection.model('vendors',vendorSchema);
export default vendorModel;
