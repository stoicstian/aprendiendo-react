import React, { Component } from "react";
import tasks from "./example/tasks.json";
import Tasks from "./components/Tasks";

import "./App.css";

class App extends Component {
  state = {
    tasks: tasks,
  };

  render() {
    return <Tasks tasks={this.state.tasks} />;
  }
}

// function HelloWorld(props) {
//   return <div id="hola-mundo">Hello: {props.name} </div>;
// }

// class HelloWorld extends React.Component {
//   render() {
//     return <div id="hola-mundo">Hello: {this.props.name} </div>;
//   }
// }

// class App extends React.Component {
//   state = {
//     show: true,
//   };

//   toggleShow = () => {
//     this.setState({ show: !this.state.show });
//   };

//   render() {
//     if (this.state.show) {
//       return (
//         <div className="App">
//           This is my component: <HelloWorld name="Sebastián" />
//           <button onClick={this.toggleShow}>Cambiar estado</button>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           No hay componentes
//           <button
//             onClick={() => {
//               this.setState({ show: !this.state.show });
//             }}
//           >
//             Cambiar estado
//           </button>
//         </div>
//       );
//     }
//   }
// }

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
