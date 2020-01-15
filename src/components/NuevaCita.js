import React, {Component} from 'react';
import uuid from 'uuid'
import PropTypes from 'prop-types';

const stateInicial = {
	cita :{
		mascota:'',
		propietario: '',
		hora:'',
		fecha:'',
		sintomas: ''
	},
	error: false
}
class NuevaCita extends Component {

	state = {...stateInicial}

	handleChange = e => {
		this.setState({
			cita: {
				...this.state.cita,
				[e.target.name] : e.target.value
			}
		})

	}

	handleSubmit = e =>{
		e.preventDefault()
		const {mascota, propietario,hora,fecha,sintomas} = this.state.cita

		if(mascota === '' || propietario === '' || hora === '', fecha === '' || sintomas === ''){
			this.setState({
				error : true
			});
			return;
		}

		//-- generar un id copiando el state primero
		const nuevaCita = {...this.state.cita}
		nuevaCita.id = uuid()

		this.props.crearNuevaCita(nuevaCita)

		this.setState({
			...stateInicial
		})

	}

	render() {

		const { error } = this.state
		const title = error ? <div className="mensaje_error">Todos los campos son obligatorios</div> : null;

		return(
			<div className="formularios">
				
				{ title }

				<form onSubmit={this.handleSubmit}>
					<ul>
						<li>
							<span className="form_txt">Nombre Mascota</span>
							<input type="text" name="mascota" onChange={this.handleChange} value={this.state.cita.mascota}/>
						</li>
						<li>
							<span className="form_txt">Nombre Dueño de Mascota</span>
							<input type="text" name="propietario" onChange={this.handleChange} value={this.state.cita.propietario}/>
						</li>
						<li>
							<span className="form_txt">Hora</span>
							<input type="time" name="hora" onChange={this.handleChange} value={this.state.cita.hora}/>
						</li>
						<li>
							<span className="form_txt">Fecha</span>
							<input name="fecha" type="date" onChange={this.handleChange} value={this.state.cita.fecha}/>
						</li>
						<li>
							<span className="form_txt">Sintomas</span>
							<textarea name="sintomas" onChange={this.handleChange} value={this.state.cita.sintomas}></textarea>
						</li>
					</ul>
					<div className="form_btn">
						<button>ENVIAR</button>
					</div>
				</form>
			</div>
			
		);
	}
}
NuevaCita.propTypes = {
	crearNuevaCita : PropTypes.func.isRequired
}
export default NuevaCita;