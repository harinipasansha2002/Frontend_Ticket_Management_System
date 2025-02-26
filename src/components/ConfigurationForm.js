import React, { useState } from 'react';
import { saveConfiguration } from '../services/api';

const ConfigurationForm = () => {
    const [config, setConfig] = useState({
        totalTickets: '',
        ticketReleaseRate: '',
        customerRetrievalRate: '',
        maxTicketCapacity: '',
        numberOfVendors: '',
        numberOfCustomer: '',
    });

    const handleInputChange = (e) => {
        setConfig({...config, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await saveConfiguration(config);
            alert('Configuration saved successfully');
        } catch (error) {
            console.error(error);
            alert('Error saving configuration');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(config).map((key) => (
                <div key={key}>
                    <label>{key}:</label>
                    <input
                        type="number"
                        name={key}
                        value={config[key]}
                        onChange={handleInputChange}
                    />
                </div>
            ))}
            <button type="submit">Save Configuration</button>
        </form>
    );
};

export default ConfigurationForm;
