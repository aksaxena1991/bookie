import { Vendor } from './vendorInterface';
import vendorModel from './vendorModel';

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
            res.send(err);
          } else {
          
            res.send(result);
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