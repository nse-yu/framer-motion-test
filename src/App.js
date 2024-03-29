import Motion1 from "./components/Motion1";
import Motion10 from "./components/Motion10";
import Motion11 from "./components/Motion11";
import Motion12 from "./components/Motion12";
import Motion13 from "./components/Motion13";
import Motion14 from "./components/Motion14";
import Motion15 from "./components/Motion15";
import Motion16 from "./components/Motion16";
import Motion17 from "./components/Motion17";
import Motion18 from "./components/Motion18";
import Motion19 from "./components/Motion19";
import Motion2 from "./components/Motion2";
import Motion20 from "./components/Motion20";
import Motion21 from "./components/Motion21";
import Motion23 from "./components/Motion23";
import Motion24 from "./components/Motion24";
import Motion25 from "./components/Motion25";
import Motion26 from "./components/Motion26";
import Motion27 from "./components/Motion27";
import Motion3 from "./components/Motion3";
import Motion4 from "./components/Motion4";
import Motion5 from "./components/Motion5";
import Motion6 from "./components/Motion6";
import Motion7 from "./components/Motion7";
import Motion8 from "./components/Motion8";
import Motion9 from "./components/Motion9";
import ColorList from "./components/practice/ColorList";
import AddColorForm from "./components/practice/AddColorForm";
import ColorProvider from "./components/practice/ColorProvider";
import style from "../src/css/style.module.css"
import Checkbox from "./components/practice/Checkbox";
import WebRequest from "./components/practice/WebRequest";
import faker from "@faker-js/faker"
import {FixedSizeList} from "react-window"
import GitInfoProvider from "./components/github/GitInfoProvider";
import GitRoot from "./components/github/GitRoot";


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
  const bigList = [...Array(5000)].map(() => ({
    name:faker.name.findName(),
    email:faker.internet.email(),
    avatar:faker.internet.avatar()
  })) 

  const renderRow = ({index,style}) => (
    <div style={{...style,...{display:"flex"}}}>
      <img 
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  )


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
      <Motion13 design={Mdiv} child={child}/>
      <Motion14 design={Mdiv} />
      <Motion15 />
      <Motion16 />
      <Motion17 />
      <Motion18 />
      <Motion19 />
      <Motion20 />
      <Motion21 />
      <Motion23 />
      <Motion24 />
      <Motion25 />
      <Motion26 />
      <Motion27 />
      <ColorProvider>
        <AddColorForm/>
        <ColorList/>
      </ColorProvider>
      <Checkbox />
      <WebRequest />
      <FixedSizeList 
        height={window.innerHeight}
        width={window.innerWidth - 20}
        itemCount={bigList.length}
        itemSize={50}
      >     
      {renderRow}
      </FixedSizeList>
      <GitInfoProvider>
        <GitRoot />
      </GitInfoProvider>
    </div>
  );
}

export default App;
