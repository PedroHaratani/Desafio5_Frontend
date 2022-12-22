import { Transferencia } from '../types/Transferencia';

export const tranferencias: Transferencia[] = [
    {id:1,data_transferencia: new Date('2019-01-01 12:00:00+03'),valor:30895.46,tipo:'DEPOSITO', nome_operador_transacao:'', conta_id:1},
    {id:2,data_transferencia: new Date('2019-02-03 09:53:27+03'),valor:12.24,tipo:'DEPOSITO', nome_operador_transacao:'', conta_id:2},
    {id:3,data_transferencia: new Date('2019-05-04 08:12:45+03'),valor:-500.50,tipo:'SAQUE', nome_operador_transacao:'', conta_id:1},
    {id:5,data_transferencia: new Date('2020-06-08 10:15:01+03'),valor:3241.23,tipo:'TRANFERENCIA', nome_operador_transacao:'Beltrano', conta_id:1}

];
