import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Form from "./Form";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <h1>WEATHER APP</h1>
      <Form defaultCity="Lagos" />

      <Footer />
    </div>
  );
}
