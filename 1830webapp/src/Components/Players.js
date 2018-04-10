import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import _ from "lodash";

const PlayerGrid = x => (
  <Grid>
    {_.times(x.PrivateCompanies.compno, i => (
      <Grid.Column key={i}>
        <p>{x.PrivateCompanies.comps[i].PCname}</p>
        <Image src={require("../webassets/tempicons/image.png")} />
      </Grid.Column>
    ))}
  </Grid>
);

class PlayerLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{PlayerGrid(this.props.Store1830)}</div>;
  }
}
export default PlayerLayout;