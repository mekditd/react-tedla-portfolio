import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>{this.props.skill} </div>
          <div style={{display: 'flex'}}>{this.props.database} </div>
          <div style={{display: 'flex'}}>{this.props.others} </div>

        </Cell>
      </Grid>
    )
  }
}

export default Skills;
