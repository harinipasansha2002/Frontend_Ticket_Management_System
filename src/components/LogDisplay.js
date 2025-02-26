import React, { useEffect, useState, useRef } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

const LogDisplay = () => {
    const [logs, setLogs] = useState([]);
    const socketUrl = 'http://localhost:8080/websocket';
    const stompClient = useRef(null);

    useEffect(() => {
        const client = new Client({
            webSocketFactory: () => new SockJS(socketUrl),
            onConnect: () => {
                client.subscribe('/topic/updates', (message) => {
                    setLogs(prevLogs => [...prevLogs, message.body]);
                });
            },
        });

        stompClient.current = client;
        client.activate();

        return () => {
            client.deactivate();
        };
    }, []);

    return (
        <div>
            <h3>Logs</h3>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
};

export default LogDisplay;
