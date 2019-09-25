import React from 'react';
import Army from './WithArms';
class Sonal extends React.Component{
	
	render(){
		return(

			<div>
				
				<h1>
				    Sonal{this.props.hocgunname}
					GunShots:{this.props.hocgunshots}
					
				</h1>
				<button onClick={this.props.hochandleGunshots}>Count</button>
			</div>
			)
	}
}
export default Army(Sonal);