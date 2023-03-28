// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from "./component/header";
import Meme from "./component/Meme";
// import Memesdata from "./component/Memesdata";

function App() {
  // const student=["ahmed","mutahir","ahsen","zaid","waseem","saqib"]
  // student.map((item)=>(
  //   console.log(item)

  // ))
  return (
    <div>
      <Header />
      <Meme />
      {/* <Memesdata/> */}
    </div>
  );
}

export default App;
