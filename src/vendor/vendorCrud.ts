import { Vendor } from './vendorInterface';
import vendorModel from './vendorModel';
import {messagesCodes} from '../constants';
export const getVendorList = async (req:any, res:any) => {
    vendorModel.find((err: any, result: any) => {
        if (err) {
          res.send({code:messagesCodes.errorCode,error:err});
        } else {
          result.length > 0 ? 
          res.send({code:messagesCodes.successCode,msg:"List of all vendors!",data:result}) :
          res.send({code:messagesCodes.successCode,msg:"List of all vendors not found!"})
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
    const request: Vendor = req.body;
    let model = new vendorModel(request);
    model.updateOne((err:any, result:any) => {
        if (err) {
            res.send({code:messagesCodes.errorCode,error:err})
          } else {
          
            res.send({code:messagesCodes.successCode,msg:"Vendor has been updated!",data:result})
          }
    });
    
    //Update
  };

  export const deleteVendor = async (req:any, res:any) => {
    const _id: number = req.body['_id'];
    vendorModel.findOneAndDelete({_id: _id}, (err:any, result:any)=> {
      if (err) {
        res.send({code:messagesCodes.errorCode,error:err})
      } else if(result == null) {
        res.send({code:messagesCodes.successCode,msg:"This vendor already has been deleted!"})
      }
      else {
      
        res.send({code:messagesCodes.successCode,msg:"Vendor has been deleted!",data:result})
      }
    });
    //delete
  };