import { Transferencia } from '../../interfaces';
import * as C from './styles';
import {TableItem} from '../TableItem'

type Props = {
    list:Transferencia[];
}

export const TableArea = ({list}:Props) =>{
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn>Data</C.TableHeadColumn>
                    <C.TableHeadColumn>Valor</C.TableHeadColumn>
                    <C.TableHeadColumn>Tipo</C.TableHeadColumn>
                    <C.TableHeadColumn>Nome Operador Transacionado</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item,index)=>{
                    <TableItem key={index} list={item}/>
                })}
                
            </tbody>
        </C.Table>
    );
}