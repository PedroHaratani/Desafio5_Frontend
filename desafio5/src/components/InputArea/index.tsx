import { useState } from 'react';
import * as C from './styles';

import { Transferencia } from '../../types/Transferencia';

type Props = {
  onAdd: (item: Transferencia) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const date = new Date(dateField);
  const [titleField, setTitleField] = useState('');
  

  const handleAddEvent = () => {
      onAdd({
        data_transferencia: date,
        nome_operador_transacao: titleField,
        id: 0,
        valor: 0,
        tipo: '',
        conta_id: 0
      });
      clearFields();
    }

  const clearFields = () => {
    setDateField('');
    setTitleField('');
  }

  return (
      <C.Container>
        <C.InputLabel>
          <C.InputTitle>Data inicio</C.InputTitle>
          <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
        </C.InputLabel>
        
        <C.InputLabel>
          <C.InputTitle>Data fim</C.InputTitle>
          <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
        </C.InputLabel>
        
        <C.InputLabel>
          <C.InputTitle>Nome Operador</C.InputTitle>
          <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
        </C.InputLabel>
        
        <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Pesquisar</C.Button>
        </C.InputLabel>
      </C.Container>
  );
}


