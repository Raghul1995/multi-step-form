import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
export class FormUserDetails extends Component {
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
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
					
					<AppBar title="Enter user details" />
					<TextField
						hintText="Enter Your First Name"
						floatingLabelText="First Name"
						onChange={handleChange('firstName')}
						defaultValue={values.firstName}
					/>
					<br />
					<TextField
						hintText="Enter Your Last Name"
						floatingLabelText="Last Name"
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}
					/>
					<br />
					<TextField
						hintText="Enter Your Email"
						floatingLabelText="Email"
						onChange={handleChange('email')}
						defaultValue={values.email}
					/>
					<br />
					<Button
						variant="contained"
						color="primary"
						
						style={styles.Button}
						onClick={this.continue}
					>
						Continue
					</Button>
					</Dialog>
        </>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	Button: {
		margin: 15
	}
};

export default FormUserDetails;
