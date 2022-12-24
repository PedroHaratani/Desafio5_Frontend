import { Transferencia } from "../interfaces";
import { Api } from "../providers"



const getAll= () => Api.get<Transferencia[]>('/transferencia/');


export const TransferenciaService={
    getAll,
}