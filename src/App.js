import React from "react";
import "./App.css";

function HelloWorld() {
  return <div id="hola-mundo">Hello World</div>;
}

class App extends React.Component {
  render() {
    //
    return (
      <div className="App">
        This is my component: <HelloWorld />
      </div>
    );
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
//       This is my component: <HelloWorld /> <HelloWorld />
//     </div>
//   );
// }

export default App;
