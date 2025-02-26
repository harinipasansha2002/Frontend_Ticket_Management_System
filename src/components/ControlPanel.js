import React, { useState } from 'react';
import { addTickets, notifyClients } from '../services/api';

const ControlPanel = () => {
    const [ticketCount, setTicketCount] = useState(0);

    const handleAddTickets = async() => {
        try {
            await addTickets(ticketCount);
            alert('Tickets added successfully');
        } catch (error) {
            console.error(error);
        }
    };

    const handleNotify = async() => {
        try {
            await notifyClients('System started');
            alert('Notification sent');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Control Panel</h3>
            <input
                type="number"
                placeholder="Number of Tickets"
                value={ticketCount}
                onChange={(e) => setTicketCount(e.target.value)}
            />
            <button onClick={handleAddTickets}>Add Tickets</button>
            <button onClick={handleNotify}>Start System</button>
        </div>
    );
};

export default ControlPanel;
