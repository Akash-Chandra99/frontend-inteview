import React, { useState, useEffect } from 'react';
import generateMessage, { Message } from './Api';

import Header from './components/header'
import LogsContent from './components/logscontent'
import Snack from './components/snack'





const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isActive, setActive] = useState<boolean>(false);
  const [errorLogs, setErrorLogs] = useState<Message[]>([]);
  const [warningLogs, setWarningLogs] = useState<Message[]>([]);
  const [infoLogs, setInfoLogs] = useState<Message[]>([]);
  const [snackPack, setSnackPack] = useState<string[]>([]);

  

  useEffect(() => {
    if(isActive === false){
      return generateMessage((message: Message) => {
        setMessages(oldMessages => [...oldMessages, message]);
      });}

    
  }, [setMessages,isActive ]);

   useEffect(() => {
      setSnackPack(messages?.map(msg => msg?.message))

      setErrorLogs(messages?.filter?.(msg => msg?.priority === 0))
     
      setWarningLogs(messages?.filter?.(msg => msg?.priority === 1))
   
      setInfoLogs(messages?.filter?.(msg => msg?.priority === 2))
    
  },[messages])


  return (

      <React.Fragment>
          <Header
            isActive = {isActive}
            setActive = {setActive}
            setMessages = {setMessages}
          />

          <Snack
            snackPack = {snackPack}
            setSnackPack = {setSnackPack}
          />


          <LogsContent 
            messages = {messages}
            errorLogs = {errorLogs}
            warningLogs = {warningLogs}
            infoLogs = {infoLogs}
            setMessages = {setMessages}
          />
          

      </React.Fragment>

  );
}

export default App;
