export interface Ledgers {
    ledgerID:number;
    vendorID:number;
    date:Date;
    debit:number;
    credit:number;
    balance:number;
    qtyMeasure:string;
    paymentVIA: string;
    cbFolio?:string;
    snapshot?:Blob;
}
export const allLedgers:Ledgers[] = [];