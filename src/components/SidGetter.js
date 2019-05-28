import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {ezEncode, utf16to8} from '../api/get_sid';
import React from 'react';


export default class SidGetter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			passString: ""
		 };

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event){
		this.setState({ 
			passString: event.target.value
		});
	}

	handleClick(event){
		let encode_string = ezEncode(utf16to8(this.state.passString));
		this.setState({ 
			passString: encode_string
		});
	}

	render(){
		return( 
			<form >
				<TextField
				id="outlined-name"
				label="Name"
				// className={classes.textField}
				value={this.state.passString}
				onChange={this.handleChange}
				margin="normal"
				variant="outlined"
				/>
				<Button 
					variant="outlined"  
					color="primary" 
					onClick={this.handleClick}>
					Hello World
				</Button>
			</form>
			)
	}
}