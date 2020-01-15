import React from 'react';
import Citas from './Citas'
import PropTypes from 'prop-types';


const ListaCitas = ({copyCitas, eliminarCita}) => (
	
	<div className="container_items">
		<div className="list_citas">
			{copyCitas.map((cita) => 
				<Citas
					key={cita.id}
					cita={cita}
					eliminarCita={eliminarCita}
				/>
			)}
		</div>
	</div>
);



ListaCitas.propTypes = {
	eliminarCita: PropTypes.func.isRequired
}
export default ListaCitas;