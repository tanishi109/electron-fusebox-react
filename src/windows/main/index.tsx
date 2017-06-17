import * as React from "react";
import {render} from "react-dom";

interface Props {
}
interface State {
  body: string;
}

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
      </div>
    );
  }
}

render(<Main />, document.getElementById("root"));
