import "@picocss/pico/css/pico.min.css";
import "@picocss/pico/css/pico.colors.css";
import Nav from "./components/Nav";
//import Counter from "./components/Counter";
import ListCast from "./components/ListCast";
import { useState } from "react";
import Modals from "./components/Modals";

function App() {
  const name = 'StarGazers';
  let [memberInfo, setMemberInfo] = useState(null);
  return (
    <div className='container'>
      <Nav />
      <img src='images/group.svg' alt='StarGazers Group' />
      <h1>Meet The <i style={{ color: "steelblue", fontSize: "3rem" }}>{name}</i></h1>
      <p>
        The term Stargazer generally refers to a person who observes the night sky, typically for the purpose of studying stars, planets, and other celestial objects. It can be used in various contexts, from amateur astronomy to pop culture
      </p>
      {
        memberInfo &&
        <Modals member={memberInfo}
          handleClose={() => { setMemberInfo(null) }} />
      }
      <ListCast onChoice={(info) => { setMemberInfo(info) }} />
    </div>
  )
}

export default App;
