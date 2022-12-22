import React from 'react';
import * as C from './styles';
import {Transferencia} from '../../types/Transferencia'
import {TableItem} from '../TableItem'

type Props = {
    list:Transferencia[];
}

export const TableArea = ( {list}:Props)=>{
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={100}>Valor</C.TableHeadColumn>
                    <C.TableHeadColumn width={100}>Tipo</C.TableHeadColumn>
                    <C.TableHeadColumn width={100}>Nome do Operador Transacional</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item,index)=>(
                        <TableItem key={index} item = {item} />
                ))}
            </tbody>
        </C.Table>
    );
}