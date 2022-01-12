import React from 'react';
import { Message } from '../../Api';
import  {Grid}  from '@material-ui/core';
import LogsType from '../logtype'
import { MainContent } from "./styles"




interface logsContentProps {
    messages:Message[],
    errorLogs:Message[],
    warningLogs:Message[],
    infoLogs:Message[],
    setMessages:React.Dispatch<React.SetStateAction<Message[]>>
    
}

const LogsContent: React.FC<logsContentProps> = ({ messages, errorLogs, warningLogs, infoLogs, setMessages }) => {

    return(
        <MainContent>
              <Grid container>
                  <Grid item xs={4}>
                      <LogsType 
                      logsType = {errorLogs} 
                      title = {"Error Type 1"}  
                      messages = {messages}
                      color={"#F56236"}
                      setMessages = {setMessages}/>

                  </Grid>
                  <Grid item xs={4}>
                    <LogsType 
                    logsType = {warningLogs} 
                    title = {"Warning Type 2"} 
                    color={"#FCE788"}
                    messages = {messages}
                    setMessages = {setMessages}/>
                  </Grid>
                  <Grid item xs={4}>
                    <LogsType 
                    logsType = {infoLogs} 
                    title = {"Info Type 3"} 
                    color={"#88FCA3"}
                    messages = {messages}
                    setMessages = {setMessages}/>
                  </Grid>
                </Grid>
          </MainContent>
    )
}

export default LogsContent;
