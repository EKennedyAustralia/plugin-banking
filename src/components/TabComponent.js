import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';



const overlayStyle = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        minWidth: "375px",
        maxWdith: "375px",      
    },
}

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #ffcc01 30%, #fde60d 90%)',
      borderRadius: 3,
      border: 0,
      color: 'black',
      height: 48,
      width: 250,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      marginLeft: 80
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

class TabComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);

        this.state = {
            value: "$28",
            merchant: "Ola Cabs - Melbourne",
            disputed: false,
            acknowledged: false
          }
    }

    handleChange(event) {
        this.setState({...this.state, [event.target.id]: event.target.value})
    }
    handleChecked(event) {
        this.setState({...this.state, [event.target.name]: event.target.checked})
    }
    

      render() {

        return (
            <div style={overlayStyle.container}>
                <TextField
                    id="value"
                    label="Transaction Value"
                    style={{ margin: 8 }}
                    placeholder="e.g. $28"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <TextField
                    id="merchant"
                    label="Merchant"
                    style={{ margin: 8 }}
                    placeholder="e.g. $300,000"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={this.state.merchant}
                    onChange={this.handleChange}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.disputed}
                            onChange={this.handleChecked}
                            name="disputed"
                            color="primary"
                        />
                    }
                    label="Customer Wishes to Dispute"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.acknowleged}
                            onChange={this.handleChecked}
                            name="acknowledged"
                            color="primary"
                        />
                    }
                    label="Customer Understands the Process"
                />
                <StyledButton variant="contained" color="secondary" onClick={() => {alert("Transaction Dipute Case Lodged")}}>Lodge Dispute</StyledButton>
            </div>
        )
        }      

}

export default withTaskContext(TabComponent);

