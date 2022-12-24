import { Api } from "../providers";
import { Transferencia } from "../types/Transferencia";

const getAll = () => Api.get<Transferencia[]>('/')
const getByName = (name:string) => Api.get<Transferencia[]>(`/name/${name}`);
const getByDate = (date1:Date,date2:Date) => Api.get<Transferencia[]>(`/date1/${date1}/date2/${date2}`);
const getByDateAndName = (date1:Date,date2:Date,name:string) => Api.get<Transferencia[]>(`/test/${name}/${date1}/${date2}`);

export const TransferenciaService ={
    getAll,
    getByName,
    getByDate,
    getByDateAndName
}