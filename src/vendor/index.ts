// import * as vendorCrud from './vendor-crud';
import * as vendorCrud from './vendor-mongo-crud';
export const create = vendorCrud.createVendor;
export const update = vendorCrud.updateVendor;
export const remove = vendorCrud.deleteVendor;
export const fetchAll = vendorCrud.getVendorList;
