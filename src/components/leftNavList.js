import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  avatarRow: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#555',
    color: '#fff',
    padding: "10px"
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  }
});

function UserAvatar(props){

  return (
    <div className={props.classes.avatarRow}>
    <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
      <Grid item>
        <Avatar
            alt="Cristian Toledo"
            src="./img/crtoledoavat.jpg"
            className={classNames(props.classes.avatar, props.classes.bigAvatar)}
        />
      </Grid>
      <Grid item>
        <Typography variant="h6" color="inherit" noWrap>
                Bienvenido Cristian
        </Typography>
      </Grid>
    </Grid>
    </div>
  );
}

class NestedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openExampleMenuItem = () => {
     this.setState({ open: !this.state.open });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>        
        <UserAvatar classes={classes} />
        <Divider />
        <List
          component="nav"
        >
          <ListItem button onClick = {()=>{this.props.switchModule('mod1');}}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sent mail" />
          </ListItem>
          <ListItem button onClick = {()=>{this.props.switchModule('mod2');}}>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Drafts" />
          </ListItem>
          <ListItem button onClick={this.openExampleMenuItem}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Inbox" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
