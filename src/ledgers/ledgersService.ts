import {Ledger,allLedgers} from './ledgersInterface';
export const getallLedgers = async(): Promise<Ledger[]> => {
    return allLedgers;
}
export const createLedger = async(ledger:Ledger): Promise<void> => {
    allLedgers.push(ledger);
}
export const updateLedger = async(ledger:Ledger): Promise<void> => {
    let index = allLedgers.findIndex(d => d._id === ledger['_id']);
    if(index > 0 || index == 0) {
        allLedgers[index]['date'] = ledger['date'];
        allLedgers[index]['debit'] = ledger['debit'];
        allLedgers[index]['credit'] = ledger['credit'];
        allLedgers[index]['balance'] = ledger['balance'];
        allLedgers[index]['qty'] = ledger['qty'];
        allLedgers[index]['qtyMeasure'] = ledger['qtyMeasure'];
        allLedgers[index]['paymentVIA'] = ledger['paymentVIA'];
        allLedgers[index]['cbFolio'] = ledger['cbFolio'];
        allLedgers[index]['snapshot'] = ledger['snapshot'];
    }
}
export const deleteLedger = async(_id:string): Promise<void> => {
    let index = allLedgers.findIndex(d => d._id === _id);
    console.log(`in delete ledger index is ${index}`)
    if(index >0 || index==0)
    allLedgers.splice(index, 1);
}