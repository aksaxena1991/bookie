import * as stockCrud from './stockCrud';
export const create = stockCrud.createStock;
export const update = stockCrud.updateStock;
export const remove = stockCrud.deleteStock;
export const fetchAll = stockCrud.getStockList;
