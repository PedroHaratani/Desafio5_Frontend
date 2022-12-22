import React from 'react';
import * as C from './styles'
import { ResumeItem } from '../ResumeItem';


export const InfoArea = () =>{
    return (
        <C.Container>
            <C.ResumeArea>
                <ResumeItem title="Saldo Total" value={0}/>
                <ResumeItem title="Saldo no Período" value={0}/> 
            </C.ResumeArea>
        </C.Container>
    );
}