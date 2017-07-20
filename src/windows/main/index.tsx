import * as React from "react";
import {render} from "react-dom";

import {
  remote,
} from "electron";

const main = remote.require("./main").FuseBox.main("default/mainProcesses/main.js");

interface Props {
}
interface State {
  body: string;
}

import Button from "~/components/Button";

class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      body: "hello world",
    };
  }

  render(): JSX.Element {
    const {body} = this.state;

    return (
      <div>
        <h1>sample app</h1>
        <p>{body}</p>
        <Button
          onClick={this.handleClick}>
          styled button
        </Button>
      </div>
    );
  }

  handleClick() {
    alert(main.fn());
  }
}

render(<Main />, document.getElementById("root"));
