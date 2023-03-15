import { Component } from "react";

class KompaPrva extends Component {
  render() {
    return (
      <div>
        <h2>
          {" "}
          Korisnik {this.props.name} ima {this.props.age} godine.
        </h2>
      </div>
    );
  }
}

export default KompaPrva;
