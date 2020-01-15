import React, {Component} from 'react';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCitas'
class App extends Component {
	state = {
		cita: []
	}


	componentDidMount(){
		const citaLS = localStorage.getItem('cita')
		if(citaLS){
			this.setState({cita: JSON.parse(citaLS)})
		}
	}
	componentDidUpdate(){
		localStorage.setItem('cita', JSON.stringify(this.state.cita))
	}

	crearNuevaCita = (datos)=>{
		const citas = [...this.state.cita, datos]

		this.setState({
			cita: citas
		})
	}


	eliminarCita = (id )=>{
		const citaActuales = [...this.state.cita];
		const citas = citaActuales.filter(cita => cita.id !== id);
		this.setState({
			cita: citas
		})


	}

	render() {
		return (
			<div className="App">
				<Header titulo="Administrador de Pacientes Veterinarios"/>
				<div className="container">
					<NuevaCita crearNuevaCita={this.crearNuevaCita}/>
					<div className="wrapp_citas">
						<h2>Administrar Citas</h2>
						<ListaCitas copyCitas={this.state.cita} eliminarCita={this.eliminarCita}/>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
