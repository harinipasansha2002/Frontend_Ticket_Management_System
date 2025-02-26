import React, { useEffect, useState } from 'react';
import { getTickets } from '../services/api';

const TicketDisplay = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async() => {
            try {
                const respone = await getTickets();
                setTickets(respone.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTickets();
    }, []);

    return (
        <div>
            <h3>Available Tickets</h3>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>{ticket.id} - {ticket.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default TicketDisplay;
