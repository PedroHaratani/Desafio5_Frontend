import { Transferencia } from '../../interfaces';
import * as C from './styles';

export type Props = {
        transf:Transferencia
}

export const TableItem = ({transf}:Props)=>{
    return(
        <C.TableLine>
            <C.TableColumn>{transf.data_transferencia?.toDateString()}</C.TableColumn>
            <C.TableColumn>{transf.valor}</C.TableColumn>
            <C.TableColumn>{transf.tipo}</C.TableColumn>
            <C.TableColumn>{transf.nome_operador_transacao}</C.TableColumn>
        </C.TableLine>
    );
}