// librerias de terceros
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/es';
//configs
import { messages } from '../../helpers/calendar-messages';

// Css
import 'react-big-calendar/lib/css/react-big-calendar.css';

// compoenntes propios
import { NavBar } from '../ui/NavBar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModel } from './CalendarModel';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

moment.locale("es")

const events = [{
    title: 'Cumpleaños de alguien',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#FAFAFA',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'Juan'
    }
}];


export const CalendarScreen = () => {
    
    const dispatch = useDispatch();

    const localizer = momentLocalizer(moment);
    const {events} = useSelector(state => state.calendar)
    
    const [lastView, setlastView] = useState(localStorage.getItem('lastView' || 'month '));

    const onDoubleClickDispatch = (e) => {
       
        dispatch( uiOpenModal() );
    }

    const onSelectEvent = (e) => {
        // console.log(e);
        dispatch( eventSetActive(e));
    
    }

    const onViewChange = (e) => {
        // console.log(e);
        setlastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = ( event, start, end, isSelected) => {


        // console.log( event, start, end, isSelected)
        const style =  {
            backgroundColor: '#00000',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }
        return {
            style
        }
    };
    
    return (



        <div className="calendar-sreen" >
            <NavBar />
            
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={messages}
                eventPropGetter ={eventStyleGetter}
                onDoubleClickEvent={ onDoubleClickDispatch }
                onSelectEvent={ onSelectEvent}
                onView={ onViewChange }
                view={ lastView || 'month' }
                components = {{ 
                    event: CalendarEvent
                }}
            />

            <CalendarModel />

            <AddNewFab />
 
        </div>
    )
}
