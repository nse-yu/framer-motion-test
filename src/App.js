import Motion1 from "./components/Motion1";
import Motion10 from "./components/Motion10";
import Motion11 from "./components/Motion11";
import Motion12 from "./components/Motion12";
import Motion13 from "./components/Motion13";
import Motion2 from "./components/Motion2";
import Motion3 from "./components/Motion3";
import Motion4 from "./components/Motion4";
import Motion5 from "./components/Motion5";
import Motion6 from "./components/Motion6";
import Motion7 from "./components/Motion7";
import Motion8 from "./components/Motion8";
import Motion9 from "./components/Motion9";

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
      <Motion8 design={Mdiv}/>
      <Motion9 design={Mdiv} />
      <Motion10 />
      <Motion11 design={Mdiv} />
      <Motion12 design={Mdiv} />
      <Motion13 design={Mdiv}/>
    </div>
  );
}

export default App;
