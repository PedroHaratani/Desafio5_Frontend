import * as C from './App.styles';
import { useEffect } from 'react';
import { useTransferencia } from './hooks/useTransferencia';
import {TableArea} from './components/TableArea'

const App = () => {

  const {list,getAll} = useTransferencia();

  useEffect(()=>{
    getAll();
  },[getAll])
  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Transferecias</C.HeaderText>
      </C.Header>
      <C.Body>
          <TableArea list={list} />
      </C.Body>
    </C.Container>
  );
}

export default App;
