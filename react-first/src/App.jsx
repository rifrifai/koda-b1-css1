// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";

export default function App() {
  return(
    <>
      <Sapa />
      <Nama name="Alvin"/>
      <Alamat name="Alvin"/>
      <Umur name="Alvin" umur={28}/>
      <Univ name="Alvin" univ="University of Oxford"/>
    </>
  ) 
}

const Sapa = () => {
  return (
    <>
      <h1 className="text-amber-800 font-medium text-center border-solid bg-blue-200 p-3">Hello there</h1>
    </>
  );
};

const Nama = ({name = "John Doe"}) => {
  return (
    <>
      <h1 className="text-amber-800 font-medium text-center">{name} is here!</h1>
    </>
  )
}

const Alamat = ({name = "John Doe", alamat = "Brigton"}) => {
  return (
    <>
      <h2 className="text-amber-800 font-medium text-center">{name}'s from {alamat}</h2>
    </>
  )
};

const Umur = ({name = "John Doe", umur = 20}) => {
  return (
    <>
      <h2 className="text-amber-800 font-medium text-center">{name} is {umur} years oldd</h2>
    </>
  )
}

const Univ = ({name = "John Doe", univ = "University of Brigton"}) => {
  return (
    <>
      <h2 className="text-amber-800 font-medium text-center">{name} is graduated from {univ}</h2>
    </>
  )
}
