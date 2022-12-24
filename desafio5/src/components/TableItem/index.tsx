import * as C from './styles';
import { Transferencia } from '../../types/Transferencia';

type Props = {
    item: Transferencia
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{item.data_transferencia}</C.TableColumn>
            <C.TableColumn>{item.valor}</C.TableColumn>
            <C.TableColumn>{item.tipo}</C.TableColumn>
            <C.TableColumn>{item.nome_operador_transacao}</C.TableColumn>
        </C.TableLine>
    );
}