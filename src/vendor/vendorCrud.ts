import { Vendor } from './vendorInterface';
import vendorModel from './vendorModel';
import {messagesCodes} from '../constants';
export const getVendorList = async (req:any, res:any) => {
    vendorModel.find((err: any, result: any) => {
        if (err) {
          res.send("Error!");
        } else {
        console.log(JSON.stringify(result))
          res.send(result);
        }
      });
  };

  export const createVendor = async (req:any, res:any) => {
    const request: Vendor = req.body;
    let model = new vendorModel(request);
    model.save((err:any, result:any) => {
        if (err) {
            res.send({code:messagesCodes.errorCode,error:err})
          } else {
          
            res.send({code:messagesCodes.successCode,msg:"Vendor has been created!",data:result})
          }
    });
  };

export const updateVendor = async (req:any, res:any) => {
    const vendor: Vendor = req.body;
    //Update
  };

  export const deleteVendor = async (req:any, res:any) => {
    const vendorID: number = req.body['vendorID'];
    //delete
  };