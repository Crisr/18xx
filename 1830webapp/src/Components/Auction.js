import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import _ from "lodash";

const columns = _.times(16, i => (
  <Grid.Column key={i}>
    <Image src={require("../webassets/tempicons/image.png")} />
  </Grid.Column>
));

const AuctionGrid = () => <Grid>{columns}</Grid>;

class AuctionLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  render() {
    return <div>{AuctionGrid()}</div>;
  }
}

export default AuctionLayout;
