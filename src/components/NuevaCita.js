import React, {Component} from 'react';
import uuid from 'uuid'


class NuevaCita extends Component {
	state = {
		cita :{
			mascota:'',
			propietario: '',
			hora:'',
			fecha:'',
			sintomas: ''
		},
		error: false
	}

	

	handleChange = e => {
		console.log('estas escribiendo', e.target.name + ' '+ e.target.value)

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
			})
		}

		//-- generar un id copiando el state primero
		const nuevaCita = {...this.state.cita}
		nuevaCita.id = uuid()

		this.props.crearNuevaCita(nuevaCita)

	}

	render() {
		return(
			<div className="formularios">
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

export default NuevaCita;