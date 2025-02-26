import React from 'react';
import ConfigurationForm from './components/ConfigurationForm';
import TicketDisplay from './components/TicketDisplay';
import ControlPanel from './components/ControlPanel';
import LogDisplay from './components/LogDisplay';

const App = () => {
    return ( <
        div >
        <
        h1 > Real - Time Event Ticketing System < /h1> <
        ConfigurationForm / >
        <
        TicketDisplay / >
        <
        ControlPanel / >
        <
        LogDisplay / >
        <
        /div>  
    );
};

export default App;