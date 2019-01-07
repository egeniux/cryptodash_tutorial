import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from './AppProvider';
import App from './Index';

const Logo = styled.div`
    font-size: 1.5em;
`

const Bar = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px
`

const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-shadow: 0px 0px 80px #03ff08;
    `}
`
function toProperCase(lower){
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}){
    return (
        <AppContext.Consumer>
            {({page}) => (
            <ControlButtonElem active={page === name}>
                {toProperCase(name)}
            </ControlButtonElem> 
            )}     
        </AppContext.Consumer>
    )
}

export default function() {
    return (
        <Bar>
            <Logo> CryptoDash </Logo>
            <div/>
            <ControlButton active name="Dashboard" />  
            <ControlButton name="Settings" />  
        </Bar>
    )
}