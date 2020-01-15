import React from 'react';
import PropTypes from 'prop-types';
const Citas = ({cita, eliminarCita}) => (
	<div className="wrap_box">
		<div className="mascota"><strong>Mascota: </strong>{cita.mascota}</div>
		<div className="propietario"><strong>Dueño: </strong>{cita.propietario}</div>
		<div className="hora"><strong>Hora: </strong>{cita.hora}</div>
		<div className="fecha"><strong>Fecha: </strong>{cita.fecha}</div>
		<div className="sintomas"><strong>sintomas: </strong> {cita.sintomas}</div>
		<button className="btn" onClick={()=> eliminarCita(cita.id)}>Borrar </button>
	</div>
);

Citas.propTypes = {
	cita: PropTypes.object.isRequired,
	eliminarCita: PropTypes.func.isRequired
}
export default Citas;