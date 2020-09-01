import React from "react";
import "./App.css";

// function HelloWorld(props) {
//   return <div id="hola-mundo">Hello: {props.name} </div>;
// }

class HelloWorld extends React.Component {
  render() {
    return <div id="hola-mundo">Hello: {this.props.name} </div>;
  }
}

class App extends React.Component {
  state = {
    show: true,
  };

  render() {
    if (this.state.show) {
      return (
        <div className="App">
          This is my component: <HelloWorld name="Sebastián" />
          <button
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            Cambiar estado
          </button>
        </div>
      );
    } else {
      return (
        <div>
          No hay componentes
          <button
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            Cambiar estado
          </button>
        </div>
      );
    }
  }
}

// const App = () => (
//   <div className="App">
//     This is my component: <HelloWorld />
//   </div>
// );

// function App() {
//   return (
//     <div className="App">
//       This is my component: <HelloWorld name="Sebastián" /> <HelloWorld />
//     </div>
//   );
// }

export default App;
