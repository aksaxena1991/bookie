import { Ledger } from './ledgersInterface';
import ledgerModel from './ledgersModel';
import {messagesCodes} from '../constants';
export const getLegerList = async (req:any, res:any) => {
    ledgerModel.find((err: any, result: any) => {
        if (err) {
          res.send({code:messagesCodes.errorCode,error:err});
        } else {
          result.length > 0 ? 
          res.send({code:messagesCodes.successCode,msg:"List of all Ledgers!",data:result}) :
          res.send({code:messagesCodes.successCode,msg:"List of all Ledgers not found!"})
        }
      });
  };

  export const createLeger = async (req:any, res:any) => {
    const request: Ledger = req.body;
    let model = new ledgerModel(request);
    model.save((err:any, result:any) => {
        if (err) {
            res.send({code:messagesCodes.errorCode,error:err})
          } else {
          
            res.send({code:messagesCodes.successCode,msg:"Leger has been created!",data:result})
          }
    });
  };

export const updateLeger = async (req:any, res:any) => {
    const request: Ledger = req.body;
    let model = new ledgerModel(request);
    model.updateOne((err:any, result:any) => {
        if (err) {
            res.send({code:messagesCodes.errorCode,error:err})
          } else {
          
            res.send({code:messagesCodes.successCode,msg:"Leger has been updated!",data:result})
          }
    });
    
    //Update
  };

  export const deleteLeger = async (req:any, res:any) => {
    const _id: number = req.body['_id'];
    ledgerModel.findOneAndDelete({_id:_id}, (err:any, result:any) => {
      if (err) {
        res.send({code:messagesCodes.errorCode,error:err})
      } else if(result == null) {
        res.send({code:messagesCodes.successCode,msg:"This ledger already has been deleted!"})
      }
      else {
      
        res.send({code:messagesCodes.successCode,msg:"Ledger has been deleted!",data:result})
      }
    })
    //delete
  };