import React from "react";

export default class Layout extends React.Component{
	constructor(props){
		super(props)		
	}
	componentWillMount(){
		console.log("Component mounting")
	}

	render(){	
		return (
			<div>
				<hr/>
				<h1>Receiver from React</h1>
				<ul>{this.props.msg.map((msg,key)=>{
					return <li key={key} onClick={ (event) => {
						this.props.markComplete(msg)
									}
					} className={["list-item", msg.done === true ? "done-true" : "done-false"].join(" ")}>{msg.text}
						    </li>})
				}</ul>

				<p>Click on the message to mark it received</p>
				{/* <button id="click" onClick={ () => {
						this.props.newItem("Alter triggered from React but Fired from AngularJS")
					  }
					}>Click to make Angular Alert!!</button> */}
			</div>
		);
	}
}