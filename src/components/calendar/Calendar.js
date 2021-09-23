// librerias de terceros

import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';

// Css
import 'react-big-calendar/lib/css/react-big-calendar.css';

// compoenntes propios
import { NavBar } from '../ui/NavBar';

const events = [{
    title: 'Cumpleaños de alguien',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#FAFAFA',
}]
const localizer = momentLocalizer(moment)

export const CalendarScreen = () => {
    return (
        <div className="calendar-sreen" >
            <NavBar />
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            />
 
        </div>
    )
}
