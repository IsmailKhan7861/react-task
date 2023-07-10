import React from "react";
import "./App.css";
import Container from "./components/Container";
import CardMain from "./components/CardMain";
import { useState } from "react";

const expenseDatas = [
  { text: "Do all excercise" },
  { text: "Finish the cource" },
];
function App() {
  const [expenses, setData] = useState(expenseDatas);

  const formData = (data) => {
    console.log(data);
    setData((prevState) => [{ text: data.title }, ...prevState]);
  };
  return (
    <div>
      <h1>Reminders</h1>
      <Container onSave={formData} />

      <CardMain expenseData={expenses} />
    </div>
  );
}

export default App;
