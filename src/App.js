import React, {Component} from 'react';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCitas'

class App extends Component {
	state = {
		cita: []
	}
	crearNuevaCita = (datos)=>{
		const citas = [...this.state.cita, datos]

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
						<ListaCitas copyCitas={this.state.cita}/>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
