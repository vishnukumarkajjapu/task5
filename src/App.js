import { useState } from "react";
import "./App.css";

function App() {
  const [date, setdate] = useState("");
  const [Age, setAge] = useState("");
  const [error, seterror] = useState("");
  const handledata = (e) => {
    setdate(e.target.value);
  };

  const age = () => {
    const Date01 = new Date(date).getFullYear();
    const Date1 = new Date().getFullYear();
    if (Date1 < Date01) {
      seterror("Failed to get Age");
      setAge("");
      return;
    }
    seterror("");
    setAge(Date1 - Date01);
  };

  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center flex flex-col gap-3">
        <h1 className="font-bold text-2xl">Age Calculator</h1>
        <p>Enter your date of birth</p>
        <div className="flex flex-col gap-2">
          <input
            className="border-2 px-2 py-1"
            type="date"
            onChange={handledata}
          />
          <button
            onClick={age}
            className="rounded hover:bg-red-600 bg-red-500 text-white  px-2"
          >
            Calculate Age
          </button>
          {error && <p className="font-bold text-lg">{error}</p>}
          {Age && <p className="font-bold text-lg">Your age is {Age}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
