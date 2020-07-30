import { Stock } from './stockInterface';
import stockModel from './stockModel';
import {messagesCodes} from '../constants';
export const getStockList = async (req:any, res:any) => {
    stockModel.find((err: any, result: any) => {
        if (err) {
          res.send({code:messagesCodes.errorCode,error:err});
        } else {
          result.length > 0 ? 
          res.send({code:messagesCodes.successCode,msg:"List of all stocks!",data:result}) :
          res.send({code:messagesCodes.successCode,msg:"List of all vendors not found!"})
        }
      });
  };

  export const createStock = async (req:any, res:any) => {
    const request: Stock = req.body;
    let model = new stockModel(request);
    model.save((err:any, result:any) => {
        if (err) {
            res.send({code:messagesCodes.errorCode,error:err})
          } else {
          
            res.send({code:messagesCodes.successCode,msg:"Stock has been created!",data:result})
          }
    });
  };

export const updateStock = async (req:any, res:any) => {
    const request: Stock = req.body;
    const _id = request['_id'];
    stockModel.updateOne({_id:_id},{$set: request},(err:any, result:any) => {
        if (err) {
            res.send({code:messagesCodes.errorCode,error:err})
          } else {
          
            res.send({code:messagesCodes.successCode,msg:"Stock has been updated!"})
          }
    });
    
    //Update
  };

  export const deleteStock = async (req:any, res:any) => {
    const _id: number = req.body['_id'];
    stockModel.findOneAndDelete({_id: _id}, (err:any, result:any)=> {
      if (err) {
        res.send({code:messagesCodes.errorCode,error:err})
      } else {
        res.send({code:messagesCodes.successCode,msg:"Stock has been deleted!"})
      }
      
      
    });
    //delete
  };