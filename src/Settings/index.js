import React from 'react';
import Welcome from '../Settings/WelcomeMessage';
import ConfirmButtom from './ConfirmButton';

export default function(){
    return (
        <div> 
            <Welcome name={"CryptoDash"}/> <ConfirmButtom/>
        </div>
    )
}