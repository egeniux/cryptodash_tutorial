import React from 'react';
import Welcome from '../Settings/WelcomeMessage';
import ConfirmButtom from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';

export default function(){
    return (
        
            <Page name="Settings">
                <Welcome name={"CryptoDash"}/> 
                <ConfirmButtom/>
                <CoinGrid />
            </Page>
    )
}