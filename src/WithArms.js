import React from 'react';

const Army=Men=>{
	class Newmen extends React.Component{
		constructor(props){
		super(props);
		this.state={
			gunShots:0
		}
	}

handleGunShots=(e)=>{
this.setState({
	gunShots:this.state.gunShots+1
})
}	
		render(){
			return <Men hocgunname="AK47" 
			            hocgunshots={this.state.gunShots}
			            hochandleGunshots={this.handleGunShots}/>
		}
	}
	return Newmen;
}
export default Army;