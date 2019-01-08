import React from 'react';
import Welcome from '../Settings/WelcomeMessage';
import ConfirmButtom from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';

export default function(){
    return (
        
            <Page name="Settings" >
                <Welcome name={"CryptoDash"}/> 
                <CoinGrid topSection/>
                <ConfirmButtom/>
                <Search/>
                <CoinGrid/>
            </Page>
    )
}