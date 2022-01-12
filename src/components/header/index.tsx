import React from 'react';
import { Message } from '../../Api';

import {
    HeaderStyle, 
    MainHeading, 
    SepratorLine, 
    ButtonContainer, 
    MainButton
} from "./styles"




interface headerProps {
    isActive:boolean,
    setActive:React.Dispatch<React.SetStateAction<boolean>>,
    setMessages:React.Dispatch<React.SetStateAction<Message[]>>
    
}

const Header: React.FC<headerProps> = ({ isActive, setActive, setMessages }) => {

    const handleToggle = () => {
        setActive(!isActive);
    };

    const handleClear = () => {
        setMessages([]);
    };
  

    let data:string = isActive? "START":"STOP";


    return(
        <HeaderStyle>
              <MainHeading>
                  <span>Coding Challenge</span>
              </MainHeading>
              <SepratorLine/>
                
                <ButtonContainer>
                  <MainButton data-testid="button-1" onClick={handleToggle}>{data}</MainButton>
                  <MainButton data-testid="button-2" onClick={handleClear}>CLEAR</MainButton>
                </ButtonContainer>
               
          </HeaderStyle>
    )
}

export default Header;
