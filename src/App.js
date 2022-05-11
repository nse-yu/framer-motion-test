import Motion1 from "./components/Motion1";
import Motion2 from "./components/Motion2";
import Motion3 from "./components/Motion3";
import Motion4 from "./components/Motion4";
import Motion5 from "./components/Motion5";
import Motion6 from "./components/Motion6";
import Motion7 from "./components/Motion7";

function App() {
  
  //==============styles===============//
  const Mdiv = {
    backgroundColor: "red",
    width: "100px",
    height: "100px",
    margin: "10px",
    borderRadius: "10px"
  };
  const parent = {
    backgroundColor: "blue",
    width: "200px",
    padding: "5px"
  }
  const child = {
    backgroundColor: "green",
    width: "50px",
    height: "50px",
    margin: "10px",
    borderRadius: "50%"
  }

  return (
    <div>
      <Motion1 design={Mdiv}/>
      <Motion2 design={Mdiv}/>
      <Motion3 desing={Mdiv}/>
      <Motion4 design={Mdiv}/>
      <Motion5 />
      <Motion6 parent={parent} child={child}/>
      <Motion7 child={child} />
    </div>
  );
}

export default App;
