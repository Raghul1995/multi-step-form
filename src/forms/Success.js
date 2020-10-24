import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from 'material-ui/AppBar';

 class Success extends Component {
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
		return (
			<MuiThemeProvider>
				<React.Fragment> {/*acts as a fake DOM element*/}
				<>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
					
					<AppBar title="Success" />
                   <h1>Thank you for Submission</h1>

				   </Dialog>
        </>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}



export default Success;
