import { useCallback, useState } from "react"
import { Transferencia } from "../interfaces";
import { TransferenciaService } from "../services/TransferenciaService"

export const useTransferencia = () =>{
    const [list,setList] = useState<Transferencia[]>([]);

    const getAll = useCallback(async () => {
        const{status,data} = await TransferenciaService.getAll();

        if(status !== 200) throw new Error();
        
        setList(data);
    },[])

    return {
        list,
        getAll,
    }
}