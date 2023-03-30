import React from "react";
import logo from "./logo.svg";
import Header from "../elements/Header";
import Footer from "../elements/Footer";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-200">
      <div className="flex flex-col w-[600px] min-h-screen bg-amber-300">
        <Header />
        <div className="flex-grow" />
        <Footer />
      </div>
    </div>
  );
}
