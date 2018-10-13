import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

function FormExample(props){
    let state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };
    
    return (
        <form className={props.classes.container} noValidate autoComplete="off">
        <TextField
          default 
          id="standard-name-input"
          label="Name"
          className={props.classes.textField}
          margin="dense"
        />
        <TextField
          id="standard-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={props.classes.textField}
          margin="dense"
          
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          className={props.classes.textField}
          margin="dense"
          
        />
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          className={props.classes.textField}
          margin="dense"
          
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          className={props.classes.textField}
          margin="dense"
          
        />
        <TextField
          id="standard-email-input"
          label="Email"
          className={props.classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="dense"
          
        />
        <TextField
          id="standard-password-input"
          label="Password"
          className={props.classes.textField}
          type="password"
          autoComplete="current-password"
          margin="dense"
          
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          className={props.classes.textField}
          margin="dense"
          InputProps={{
            readOnly: true,
          }}
          
        />
        <TextField
          id="standard-dense"
          label="Dense"
          className={classNames(props.classes.textField, props.classes.dense)}
          margin="dense"
          
        />
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={state.multiline}
          onChange={props.handleChange('multiline')}
          className={props.classes.textField}
          margin="dense"
          helperText="hello"
          
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={props.classes.textField}
          margin="dense"
          
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={props.classes.textField}
          helperText="Some important text"
          margin="dense"
          
        />
        <TextField
          id="standard-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={props.classes.textField}
          margin="dense"
          
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          className={props.classes.textField}
          margin="dense"
          
        />
        <TextField
          id="standard-number"
          label="Number"
          value={state.age}
          onChange={props.handleChange('age')}
          type="number"
          className={props.classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
          
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={props.classes.textField}
          margin="dense"
          
        />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={props.classes.textField}
          value={state.currency}
          onChange={props.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: props.classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="dense"
          
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          className={props.classes.textField}
          value={state.currency}
          onChange={props.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: props.classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="dense"
          
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="dense"
          
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-bare"
          className={props.classes.textField}
          defaultValue="Bare"
          margin="dense"
          
        />
      </form>
    );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: theme.mixins.toolbar,
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  }
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeTextFiels = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Item One" icon={<PhoneIcon />} />
            <Tab label="Item Two" icon={<FavoriteIcon />} />
            <Tab label="Item Three" icon={<PersonPinIcon />} />
          </Tabs>
        </AppBar>
        <div className={classes.toolbar} />
        {value === 0 && <FormExample handleChange={this.handleChangeTextFiels} classes={classes} />}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}        
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);
