import { useEffect, useCallback } from 'react';
import * as C from './App.styles';
import { TableArea } from './components/TableArea';
import { InputArea } from './components/InputArea';
import { useTransferencia } from './hooks/useTransferencia';
import { Transferencia } from './types/Transferencia';

const App = () => {
  
  const {tasks,getAll,getByName,getByDate,getByNameAndDate}= useTransferencia();

  useEffect(()=>{
    getAll();
  },[getAll,getByName])
  

  const handleAddItem = useCallback(async (item: Transferencia) => {
    await getByName(item.nome_operador_transacao);
    await getByDate(item.data_transferencia,item.data_transferencia);
    await getByNameAndDate(item.nome_operador_transacao,item.data_transferencia,item.data_transferencia)
    console.log(item.data_transferencia);
  },[getByName, getByDate, getByNameAndDate]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        <InputArea onAdd={handleAddItem} />

        <TableArea list={tasks} />

      </C.Body>
    </C.Container>
  );
}

export default App;
