import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from 'material-ui/AppBar';
import {List, ListItem, ListItemText} from '@material-ui/core'
import Button from '@material-ui/core/Button';
 class Confirm extends Component {
	continue = (e) => {
        e.preventDefault();
        //Process Form in back-End
		this.props.nextStep(); //from userFOrm component
    };
    back = (e) => {
		e.preventDefault();
		this.props.prevStep(); //from userFOrm component
	};
	render() {
		const { values : { firstName, lastName, email, occupation, city, bio } } = this.props; //destructuring props
		return (
			<MuiThemeProvider>
				<React.Fragment> {/*acts as a fake DOM element*/}
					
					
					<AppBar title="Confirm user details" />
                    <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
                    <Button
						variant="contained"
						color="primary"
						primary={false}
						style={styles.Button}
						onClick={this.back}
					>
									Back
					</Button>
					<Button
						variant="contained"
						color="primary"
						primary={true}
						style={styles.Button}
						onClick={this.continue}
					>						Confirm
					</Button>
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

export default Confirm;
