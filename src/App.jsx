import "./App.css";
import { Component } from "react";
import KompaPrva from "./components/KompaPrva";
import KompaDruga from "./components/KompaDruga";
import KompaTreca from "./components/KompaTreca";

const korisnici = [
  { name: "Luka", age: 4 },
  { name: "Leon", age: 25 },
  { name: "Judita", age: 30 },
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Zadatak</h1>
        <KompaPrva age={korisnici[0].age} name={korisnici[0].name} />
        <KompaPrva age={korisnici[1].age} name={korisnici[1].name} />
        <KompaDruga age={korisnici[2].age} name={korisnici[2].name} />
        <KompaTreca> nekakav tekst</KompaTreca>
      </div>
    );
  }
}
export default App;
