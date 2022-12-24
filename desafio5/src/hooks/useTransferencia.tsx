import { useCallback, useState } from "react"
import { TransferenciaService } from "../service/TransferenciaService";
import { Transferencia } from "../types/Transferencia"


export const useTransferencia = () =>{
    const [tasks,setTasks] = useState<Transferencia[]>([]);

    const getAll = useCallback(async () =>{
        const {status,data} = await TransferenciaService.getAll();
        if(status !==200) throw new Error();   

        setTasks(data);

    },[]);

    const getByName = useCallback(async (nome:string)=>{
        const {status,data} = await TransferenciaService.getByName(nome);
        if(status !==200)throw new Error();

        setTasks(data);
    },[]);

    const getByDate = useCallback(async(date:Date,date2:Date)=>{
        const{status,data} = await TransferenciaService.getByDate(date,date2);
        if(status!==200)throw new Error()

        setTasks(data);
    },[]);

    const getByNameAndDate = useCallback(async(name:string,date:Date,date2:Date)=>{
        const{status,data} = await TransferenciaService.getByDateAndName(date,date2,name);
        if(status!==200)throw new Error()

        setTasks(data);
    },[])
        
    return {
        tasks,
        getAll,
        getByName,
        getByDate,
        getByNameAndDate
    };
};
