import { useState,useEffect } from 'react';
import React from 'react';
import * as C from './App.styles';
import {Transferencia} from './types/Transferencia';
import { tranferencias } from './data/transferecias';
import {getCurrentMonth,filterListByDate} from './helpers/dateFilter';
import {TableArea} from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';



const App = () => {
  const [list,setList] = useState(tranferencias);
  const [filteredList,setFilteredList] = useState<Transferencia[]>([])
  const [currentMonth,setCurrentMonth] = useState(getCurrentMonth);

  useEffect(()=>{
      setFilteredList(filterListByDate(list,currentMonth))
  }, [list,currentMonth])

  const handleAddItem = (item:Transferencia) =>{
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Bancário</C.HeaderText>
      </C.Header>

      <C.Body>
        <InputArea onAdd={handleAddItem} />
        
        
        <InfoArea/>

        
        <TableArea list={list}/>

      </C.Body>
    </C.Container>
  );

}

export default App;