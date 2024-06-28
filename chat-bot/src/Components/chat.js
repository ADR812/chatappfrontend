import React, { useEffect, useState } from 'react'
import MyMessage from './myMessage';
import AnotherMess from './anotherMess';

const Chat = () => {

    const [clientId, setClientId] = useState(Math.floor(new Date().getTime() / 1000));
    const [Chistory, setChistory] = useState([])
    const [mess, setMess] = useState([])
    const [messs, setMesss] = useState([])
    const [inputtext, setInputText] = useState("")
    const [socket, setSocket] = useState();
    const [isOnline, setIsOnline] = useState(false)

    useEffect(() => {
        const url = "ws://localhost:8000/ws/" + clientId;
        const ws = new WebSocket(url)
        ws.onopen = (e) => {
            ws.send("connect")
        }
        ws.onmessage = (e) => {
            const mes = JSON.parse(e.data)
            setMesss([...messs, mes])
        }
        setSocket(ws)
        return () => (ws.close());
    })
    console.log(messs,mess)
    const send_mess = () => {
        socket.send(inputtext)
        socket.onmessage = (e) => {
            const mes = JSON.parse(e.data);
            setMesss([...messs, mes])
        }
        setInputText("")
    }



    return (
        <>
            <h1>
                chats
                
            </h1>
            <h1>your client id : {clientId}</h1>
            {
                    messs.map((idx, val) => {
                        if (val.client_id === clientId) {
                            return <div key={idx}>
                                <MyMessage client_id={val.client_id} message={val.message} />
                            </div>
                        }
                        else
                            return <div key={idx}> 
                                <AnotherMess client_id={val.clientId} message={val.message} />
                            </div>
                    })
                }
                <div>
                    <input 
                    className=''
                    type='text'
                    placeholder='enter your text'
                    onChange={(e)=>{
                        e.preventDefault()
                        setInputText(e.target.value)
                    }}
                    value={inputtext}> 
                    </input>
                    <button className=''
                    onClick={send_mess}>send</button>
                </div>

        </>
    )
}

export default Chat