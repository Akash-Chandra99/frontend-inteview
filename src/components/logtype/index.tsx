import React from 'react';
import { Message } from '../../Api';
import Log from '../log';


interface logsTypeProps {
    logsType:Message[], 
    title:string,
    color:string,
    messages:Message[],
    setMessages:React.Dispatch<React.SetStateAction<Message[]>>
    
}


const LogsType: React.FC<logsTypeProps> = ({logsType, title,color,messages,setMessages}) => {

    

    return(

        <div>
            <h2>{title}</h2>
            <p>Count {logsType.length}</p>
            {[...logsType]?.reverse().map?.((msg) => 
                <Log  
                    key={msg.message} 
                    message = {msg.message} 
                    messages = {messages}
                    setMessages = {setMessages}
                    color={color}
                    />
                )}
        </div>
        
    )
}

export default LogsType;
