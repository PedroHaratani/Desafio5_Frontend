import React from "react";

export type Transferencia ={
    id: number;
    data_transferencia: Date;
    valor: number;
    tipo: string;
    nome_operador_transacao: any;
    conta_id: number;
    children?: React.ReactNode
}

