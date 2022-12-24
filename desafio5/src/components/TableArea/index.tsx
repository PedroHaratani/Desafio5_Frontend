import * as C from './styles';
import { TableItem } from '../TableItem';
import { Transferencia } from '../../types/Transferencia';

type Props = {
    list: Transferencia[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Valor</C.TableHeadColumn>
                    <C.TableHeadColumn>Tipo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Nome do Operador de transacao</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </C.Table>
    );
}