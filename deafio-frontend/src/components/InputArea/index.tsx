import React from "react";
import { Transferencia } from "../../types/Transferencia";
import * as C from './styles';

type Props = {
    onAdd: (tranferencia:Transferencia)=>void;
}

export const InputArea = ({onAdd}:Props) =>{
    const handleAddEvent = () => {
        let newTransferencia:Transferencia ={
            id:5,data_transferencia: new Date('2019-02-03 09:53:27+03'),valor:15.24,tipo:'DEPOSITO', nome_operador_transacao:'', conta_id:1
        }
        onAdd(newTransferencia)
    }
    return(
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    );
}