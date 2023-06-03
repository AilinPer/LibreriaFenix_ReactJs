import React from "react";
import "../src/App.css";

//Components
import Navbar  from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends React.Component {
  render(){
    return (
      <>
        <div className="App">
          <Navbar />
        </div>

        <div>
          <ItemListContainer greeting="Aqui se mostraran los libros"/>
        </div>
      </>
    )
  }
}

export default App