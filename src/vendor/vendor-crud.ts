import * as vendorService from './vendor-service';
import {Vendor} from './vendor';

export const getVendorList = async (req:any, res:any) => {
    const vendorList: Vendor[] = await vendorService.getAllVendors();
    console.log(`in get ${JSON.stringify(vendorList)}`)
    try {
        res.status(200).send(vendorList);
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

  export const createVendor = async (req:any, res:any) => {
    const vendor: Vendor = req.body;
    await vendorService.createVendor(vendor);
    try {
        res.status(200).send({
            message: "Successfully added",
            IsSuccess: true,
            result: ""
        });
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

export const updateVendor = async (req:any, res:any) => {
    const vendor: Vendor = req.body;
    await vendorService.updateVendor(vendor);
    try {
        res.status(200).send({
            message: "Successfully updated",
             IsSuccess: true,
             result: ""
        });
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

  export const deleteVendor = async (req:any, res:any) => {
    const vendorID: number = req.body['vendorID'];
    await vendorService.deleteVendor(vendorID);
    try {
        res.status(200).send({
            message: "Successfully deleted",
             IsSuccess: true,
             result: ""
        });
      } catch (e) {
        res.status(404).send(e.message);
      }
  };
