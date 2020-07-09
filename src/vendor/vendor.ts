import mongoose from 'mongoose';
export interface Vendor {
    _id?: string;
    firstname:string;
    lastname:string;
    // gst:string;
    // email?:string;
    // mobile:string;
    // phone?:string;
    // address:string;
    // accountOf:string
}

export const allVendors: Vendor[] = [];