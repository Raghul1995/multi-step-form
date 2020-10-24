import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
class UserForm extends Component {
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		occupation: '',
		city: '',
		bio: ''
	};

	//next step

	nextStep = () => {
		const { step } = this.state; // destructering the state
		this.setState({
			step: step + 1 //incrementing the step by 1 to proceed to next step
		});
	};
	//next step

	prevStep = () => {
		const { step } = this.state; // destructering the state
		this.setState({
			step: step - 1 //decrementing the step by 1 to proceed to next step
		});
	};
	// handle field changes
	handleChange = (input) => (e) => {
		this.setState({
			[input]: e.target.value
		});
	};
	render() {
		const { step } = this.state;
		const { firstName, lastName, email, occupation, city, bio } = this.state;
		const values = { firstName, lastName, email, occupation, city, bio };
		switch (step) {
			case 1:
				return (
					<FormUserDetails //we access all the below element with the help of props
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 2:
				return (
					<FormPersonalDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
            />
			case 4:
				return <Success/>;
			default:
				return null
		}
	}
}

export default UserForm;
