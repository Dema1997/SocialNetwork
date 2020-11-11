import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormConfirm from './FormConfirm';
import FormSuccess from './FormSuccess';

 class UserForm extends Component {

    state={
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: '',
        address: '',
        date: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
        console.log(this.state)
    }

    render(){
        const { step, firstName, lastName, email, city, date, address } = this.state
        const values = { step, firstName, lastName, email, city, date, address }
        switch(step) {
            case 1:
                return(
                    <FormUserDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <FormPersonalDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return(
                    <FormConfirm
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return(
                    <FormSuccess
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        }
    }
    }
export default UserForm;