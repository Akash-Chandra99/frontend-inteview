import React from 'react';
import { Typography, Button, CardContent, CardActions } from '@mui/material';
import { Message } from '../../Api';
import { LogCard, ButtonWrapper } from "./styles"

interface logProps {
    message:string,
    messages:Message[],
    setMessages:React.Dispatch<React.SetStateAction<Message[]>>,
    color:string
}


const Log: React.FC<logProps> = ({message,messages,setMessages, color}) => {

    const deleteLog = (message: string) => {
        setMessages(messages?.filter?.(log => log?.message !== message))
    }

    return(
                    <LogCard data-testid="log-style" color = {color}>
                        <CardContent>
                        <Typography variant='body2'>
                            {message}
                        </Typography>
                        </CardContent>
                        <ButtonWrapper>
                            <CardActions>
                                    <Button data-testid="clear-btn" style={{color:'black', textTransform:'capitalize'}} size="small" onClick={() => deleteLog(message)}>clear</Button>
                            </CardActions>
                        </ButtonWrapper>
                    </LogCard>
    )
}

export default Log;
