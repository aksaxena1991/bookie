
export interface Stock {
    _id?: string;
    item:string;
    qty:string;
    unit:string;
    rate:string;
    amount:string;
    gst:string;
    billNo:string;
    purchaseFrom:string
}

export const allStocks: Stock[] = [];