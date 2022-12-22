import React from "react";
import * as C from './styles';
import {Transferencia} from '../../types/Transferencia'
import {formatDate} from '../../helpers/dateFilter';

type Props = {
    item:Transferencia;
}

export const TableItem = ({item}:Props) =>{
    return(
        <C.TableLine>
            <C.TableColumn width={100}>{formatDate(item.data_transferencia)}</C.TableColumn>
            <C.TableColumn width={150}>{item.valor}</C.TableColumn>
            <C.TableColumn width={100}>{item.tipo}</C.TableColumn>
            <C.TableColumn width={180}>{item.nome_operador_transacao}</C.TableColumn>
        </C.TableLine>
    );
}