import React, {Component} from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale} from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)



class NuevaCita extends Component {
	state = {
		cita :{
			mascota:'',
			propietario: '',
			hora:'',
			fecha:'',
			sintomas: ''
		},
		startDate: new Date()
	}

	

	handleChange = (e, date) => {
		this.setState({
			startDate: date
		});
		console.log('estas escribiendo', e.target.name + ' '+ e.target.value)
	}

	render() {
		return(
			<div className="formularios">
				<form>
					<ul>
						<li>
							<span className="form_txt">Nombre Mascota</span>
							<input type="text" name="mascota" onChange={this.handleChange}/>
						</li>
						<li>
							<span className="form_txt">Nombre Dueño de Mascota</span>
							<input type="text" name="propietario" onChange={this.handleChange}/>
						</li>
						<li>
							<span className="form_txt">Hora</span>
							<input type="time" name="hora" onChange={this.handleChange}/>
						</li>
						<li>
							<span className="form_txt">Fecha</span>
							<DatePicker name="fecha" selected={this.state.startDate} onChange={this.handleChange} locale={es}/>
						</li>
						<li>
							<span className="form_txt">Sintomas</span>
							<textarea name="sintomas" onChange={this.handleChange}></textarea>
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