// librerias de terceros
import React, { useEffect, useState } from 'react';
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
import { eventSetActive, eventsStartLoading, limpiarNotaActiva } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { EventDeleteFab } from '../ui/EventDeleteFab';

moment.locale("es");

export const CalendarScreen = () => {
    
    const dispatch = useDispatch();

    const localizer = momentLocalizer(moment);

    const {events, activeEvent} = useSelector(state => state.calendar);

    const [lastView, setlastView] = useState(localStorage.getItem('lastView' || 'month '));

    useEffect(() => {
        dispatch( eventsStartLoading());
    }, [dispatch]);


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
    
    const onSelectSlot = (e) => {
        dispatch(limpiarNotaActiva())
    }
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
                onSelectSlot={onSelectSlot}
                selectable={true}
                onView={ onViewChange }
                view={ lastView || 'month' }
                components = {{ 
                    event: CalendarEvent
                }}
            />

            <CalendarModel />
            <AddNewFab />
            {
             (activeEvent) &&  <EventDeleteFab />
            }
 
        </div>
    )
}
