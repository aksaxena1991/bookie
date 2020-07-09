import mongoose from "mongoose";
const uri = "mongodb+srv://rootBookie:rootBookie@bookie.dqouf.mongodb.net/bookie?retryWrites=true&w=majority";
const conn = mongoose.createConnection(uri,{

    useNewUrlParser: true,

    useCreateIndex: true,

    useUnifiedTopology: true,

    useFindAndModify: false

}
);
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

const vendorModel = conn.model('vendors',vendorSchema);
export default vendorModel;
