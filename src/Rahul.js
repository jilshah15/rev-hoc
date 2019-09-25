import React from 'react';
import Army from './WithArms';
class Rahul extends React.Component{
	
	render(){
		return(

			<div>
				
				<h1>
					
					Rahul{this.props.hocgunname}
					GunShots:{this.props.hocgunshots}
				</h1>
				<button onClick={this.props.hochandleGunshots}>Count</button>
				
			</div>
			)
	}
}
export default Army(Rahul);