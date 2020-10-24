import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
export class FormUserDetails extends Component {
	back = (e) => {
		e.preventDefault();
		this.props.prevStep(); //from userFOrm component
	};
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep(); //from userFOrm component
	};
	render() {
		const { values, handleChange } = this.props; //destructuring props
		return (
			<MuiThemeProvider>
				<React.Fragment>
					{/*acts as a fake DOM element*/}
					<>
					<Dialog open fullWidth maxWidth="sm">
						<AppBar title="Enter user details" />

						<TextField
							hintText="Enter Your occupation"
							floatingLabelText="occupation"
							onChange={handleChange('occupation')}
							defaultValue={values.occupation}
						/>
						<br />
						<TextField
							hintText="Enter Your city"
							floatingLabelText="city"
							onChange={handleChange('city')}
							defaultValue={values.city}
						/>
						<br />
						<TextField
							hintText="Enter Your bio"
							floatingLabelText="bio"
							onChange={handleChange('bio')}
							defaultValue={values.bio}
						/>
						<br />
						<Button variant="contained" color="primary" onClick={this.back}>
							Back
						</Button>
						<Button variant="contained" color="primary" onClick={this.continue}>
							Continue
						</Button>
					</Dialog>
					</>	
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default FormUserDetails;
