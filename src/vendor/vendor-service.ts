import {Vendor, allVendors} from './vendor';
export const getAllVendors = async(): Promise<Vendor[]> => {
    return allVendors;
}
export const createVendor = async(vendor:Vendor): Promise<void> => {
    allVendors.push(vendor);
}
export const updateVendor = async(vendor:Vendor): Promise<void> => {
    let index = allVendors.findIndex(d => d.vendorID === vendor['vendorID']);
    if(index > 0 || index == 0) {
        allVendors[index]['firstname'] = vendor['firstname'];
        allVendors[index]['lastname'] = vendor['lastname'];
        allVendors[index]['address'] = vendor['address'];
        allVendors[index]['email'] = vendor['email'];
        allVendors[index]['gst'] = vendor['gst'];
        allVendors[index]['mobile'] = vendor['mobile'];
        allVendors[index]['phone'] = vendor['phone'];
        allVendors[index]['accountOf'] = vendor['accountOf'];
    }
}
export const deleteVendor = async(vendorID:number): Promise<void> => {
    let index = allVendors.findIndex(d => d.vendorID === vendorID);
    console.log(`in delete vendor index is ${index}`)
    if(index >0 || index==0)
    allVendors.splice(index, 1);
}