import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { ListItem } from 'material-ui';
import List from '@material-ui/core/List';

export const FormConfirm = (props) => {

    const continu = e =>{
        e.preventDefault()
        this.props.nextStep();
    }
    const back = e =>{
        e.preventDefault()
        this.props.prevStep();
    }
    
    const {values: { firstName, lastName, email, date, address, city } } = props;

    return(
        <MuiThemeProvider>
            <>
              <AppBar title="Confirm your details" />
              <br/>

              <List>
                  <ListItem 
                  primaryText="First name"
                  secondaryText={firstName}
                  />
                  <ListItem 
                  primaryText="Last name"
                  secondaryText={lastName}
                  />
                  <ListItem 
                  primaryText="Email"
                  secondaryText={email}
                  />
                  <ListItem 
                  primaryText="City"
                  secondaryText={city}
                  />
                  <ListItem 
                  primaryText="Address"
                  secondaryText={address}
                  />
                  <ListItem 
                  primaryText="Date of birdh"
                  secondaryText={date}
                  />
              </List>

              <RaisedButton style={styles.button} label="CONFIRM & CONTINUE" primary={true} onClick={continu} />
              <RaisedButton style={styles.button} label="BACK" primary={true} onClick={back} />

            </>
        </MuiThemeProvider>
    );
    }
const styles={
    button:{
        margin: 15
    }
}
export default FormConfirm;