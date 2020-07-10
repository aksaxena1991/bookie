export interface Ledger {
    _id?: string;
    vendorID:number;
    date:String;
    debit:number;
    credit:number;
    balance:number;
    qty:number;
    qtyMeasure:string;
    paymentVIA: string;
    cbFolio?:string;
    snapshot?:string;
}
export const allLedgers:Ledger[] = [];