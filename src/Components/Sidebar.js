import React from 'react'

const sidebar = (props) => {
	
	return (
		<nav className="col-md-2 d-none d-md-block bg-light sidebar">
		  <div className="sidebar-sticky">
			<ul className="nav flex-column">
			{
				props.menu.map((v,k)=>{
					return (
						<li key={k} className="nav-item">
							<a className="nav-link active" href="http://google.com">
							  <span data-feather="home"></span>
							  {v.label} <span className="sr-only">(current)</span>
							</a>
						  </li>
					)
				})
			}
			  
			</ul>
		  </div>
		</nav>
	)
	
}

export default sidebar;