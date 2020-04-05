import React from 'react'

const Maincontent = (props)=>{
	
	const cardStyle = {
		margin:'8px'
	};
	
	const rowCard = {
		display: props.togel
	};
	
	const btnStyle = {
		backgroundColor: 'green',
		color: '#fff'
	}
	
	const radiumStyle = {
		backgroundColor: 'green',
		color: '#fff'
	}
	
	const cobaResponsive = {
		width:'auto',
		height:'200px',
		backgroundColor:'yellow'
		
	}
	
	return (
		<main role="main" className="col-md-10 mt-2 ml-sm-auto col-lg-10 px-4">
			
			<div className="row mb-3">
				<div className="col-md-12">
					<button onClick={props.click} style={btnStyle} className="">Togle Me</button>
				</div>
				
				<div className="col-md-12">
					<button style={radiumStyle}>Coba Radium</button>
				</div>
				
				<div className="col-md-12">
					<div style={cobaResponsive}>Halo</div>
				</div>
			</div>
			
			<div className="row" style={rowCard}>
				
				{ 
					props.data.map((v,k)=>{
						
						return (
							<div key={k} className="card" style={cardStyle}>
								<div className="card-body">
									<h1 className="card-title">{ v.type }</h1>
									<p className="card-text">
										{ v.name }
									</p>
									<p onClick={ (event) => props.delete(event, v.id) }>Hapus</p>
									<div><input type="text" name="" id="" className="form-control" onChange={(event)=>props.changed(event)} /></div>
								</div>
							</div>
						)
						
					})
				}
				
			</div>
		</main>
	)
	
}

export default Maincontent