import {Transferencia} from '../types/Transferencia'

export const getCurrentMonth = () =>{
    let now = new Date();
    return `${now.getFullYear}-${now.getMonth()+1}-${now.getDay}`
}

export const filterListByDate = (list:Transferencia[],date:string):Transferencia[] =>{
    let newList:Transferencia[] = [];
    let [year,month,day] = date.split('-');

    for(let i in list){
        if(list[i].data_transferencia.getFullYear()==parseInt(year) && list[i].data_transferencia.getMonth()==parseInt(month) && list[i].data_transferencia.getDay()==parseInt(day)){
            newList.push(list[i]);
        }
    }

    return newList;
}

export const formatDate = (date:Date):string => {
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

    return `${addZero(day)}/${addZero(month)}/${year}`
}

const addZero = (n:number):string => n<10 ? `0${n}` : `${n}`;
