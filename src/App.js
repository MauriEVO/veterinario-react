import React, {Component} from 'react';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita'

class App extends Component {
	state = {}
	render() { 
		return (
			<div className="App">
				<Header titulo="Administrador de Pacientes Veterinarios"/>
				<NuevaCita />
			</div>
		);
	}
}
export default App;
