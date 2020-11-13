import React, { Component } from 'react';
import FormLogin from '../components/FormLogin';

 class Login extends Component {

    state={
        email: '',
        password: ''
    }

     nextStep = () => {
        const { step } =this.state;
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

    handleChange = input => e =>{
        this.setState({ [input]: e.target.value });
        console.log(this.state)
    }
    render(){
        const { email, password } = this.state
        const values = { email, password } 
                return(
                    <FormLogin
                      values={values}
                    />
                )
           
        }
}
export default Login;