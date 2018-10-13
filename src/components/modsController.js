import React from 'react';

import Mod1  from './mods/modExample1';
import Mod2  from './mods/modExample2';


class ModsController extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: true
      };
    }

  render() {
        if(this.props.mod === "mod1"){
            return(<Mod1/>);
        }
        else if(this.props.mod === "mod2")
            return(<Mod2/>);

       return(null);
  }
}

export default (ModsController);