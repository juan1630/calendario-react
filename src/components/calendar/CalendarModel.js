import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
// Este codigo centra el modal


Modal.setAppElement('#root');
  // configuracion para que la hora salga en  3:00:00
  const now = moment().minutes(0).seconds(0).add(1, 'hours');
  const datePlus1 = now.clone().add(1, 'hours');

export const CalendarModel = () => {
    
    const dispatch = useDispatch();

    // para estar a la escucha de los cambios del state se usa el useSelector
    const {modalOpen} = useSelector(state => state.ui)

    // state que controla el cambio de fechas en el input
    const [dateStart, setdateStart] = useState(now.toDate());
    const [endDate, setendDate] = useState( datePlus1.toDate());
    const [titleValid, settitleValid] = useState(true);
    
    // estado incial del hook
    const [formValues, setformValues] = useState({
        title: 'evento',
        notes: '',
        start: now.toDate(),
        end: datePlus1
    });

    // obtenemos estos parametros del state
    const { notes,  title, start, end} = formValues;

    // evemto que controla el cambio del formulario
    const handleInputChange = ({target}) => {
            // obtenemos el target y de los valores que se envien las asigna 
        setformValues({
            ...formValues,
            [target.name]: target.value
        });

    }

    // manejamos el evento del submit del formulario 
    const  handleSubmit = (e) => {
        e.preventDefault();

        // pasamos de las fechas naturales de JS a las de moment
        const momentStart = moment( start );
        const momentEnd = moment( end );

    // comparamos que la fecha de  inicio es igual o despues de la fecha de finalizacion 
        if(  momentStart.isSameOrAfter( momentEnd ) ) {
            Swal.fire('Error', 'La fecha fin debe de ser mayor', 'error');
            return;
        }


        if( title.trim().length < 2 ) {
            settitleValid( false)
            return;
        }

        // TODO GRABAR EN LA DB
        settitleValid(true);
        closeModal();

    }

    const closeModal = (e) => {
            dispatch( uiCloseModal());
    }

    const handleStartDateChange = (e) => {
        setdateStart( e );
        setformValues({
            ...formValues,
            start: e
        })
    }   

    const handleEnDateChange = (e) => {
        
        setendDate(e);
        setformValues({
            ...formValues,
            end: e
        });
    }

     
    return (
        <Modal
            isOpen={ modalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            closeTimeoutMS={200}
            overlayClassName="modal-fondo"
        >

    <h1> Nuevo evento </h1>
    
    <hr/>


        <form 
            className="container"
            onSubmit={handleSubmit}
            >

            <div className="form-group">
                <label>Fecha y hora inicio</label>
                <DateTimePicker
                    onChange={handleStartDateChange}
                    value={dateStart}
                    className="form-control "
                />
            </div>

            {/* FECHA DE TERMINO */}
            <div className="form-group">
                <label>Fecha y hora fin</label>
                <DateTimePicker
                    onChange={handleEnDateChange}
                    value={endDate}
                    className="form-control"
                    minDate={ dateStart }
                />
            </div>

            <hr />
            <div className="form-group">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    className={ `form-control ${ !titleValid && 'is-invalid' }`  }
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                    value={ title }
                    onChange={handleInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={ notes }
                    onChange={handleInputChange}
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>
         
      </Modal>
    )
}
