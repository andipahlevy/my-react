import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Maincontent from './Components/Maincontent'

class App extends Component{
	
	state = {
		name: 'Andi Levi',
		menu:[
			{ link:'#', label:'Dashboard' },
			{ link:'#', label:'Menu 1' },
			{ link:'#', label:'Menu 2' },
		],
		family:[
			
			{ id:1, name: 'Andi Baso', age: 58, type: 'Ayah' },
			{ id:2, name: 'Suryati', age: 58, type:'Ibu' },
			{ id:3, name: 'Andi Gaga', age: 58, type: 'Adik' },
		
		],
		rowCardDisplay:'none'
	}
	
	togleEvent = (event)=>{
		const newDisplay = this.state.rowCardDisplay == 'none' ? 'block' : 'none'
		this.setState({rowCardDisplay:newDisplay})
		
	}
	
	deleteEvent = (event, id)=>{
		const oldState = this.state.family
		const index = oldState.findIndex(p =>{
			return p.id === id
		})
		oldState.splice(index,1)
		this.setState({family: oldState});
		
	}
	
	changeNameEvent = (event)=>{
		console.log(event.target.value)
	}
	
	render(){
		return (
			<div className="App">
				<Header />
			  
				<div className="container-fluid">
					<div className="row">
						<Sidebar menu={this.state.menu} />
						
						<Maincontent 
							changed={this.changeNameEvent} 
							delete={this.deleteEvent} 
							togel={this.state.rowCardDisplay} 
							click={this.togleEvent} 
							data={this.state.family} />
					</div>
				</div>
			</div>
		);
	}
	
}

export default App;
