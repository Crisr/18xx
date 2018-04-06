import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import _ from "lodash";

const AuctionGrid = x => (
  <Grid>
    {_.times(x.PrivateCompanies.compno, i => (
      <Grid.Column key={i}>
        <p>{x.PrivateCompanies.comps[i].PCname}</p>
        <Image src={require("../webassets/tempicons/image.png")} />
      </Grid.Column>
    ))}
  </Grid>
);

class AuctionLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  render() {
    return <div>{AuctionGrid(this.props.Store1830)}</div>;
  }
}
export default AuctionLayout;
