import { useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState(["app", "controller", ""]);

  const value = names.at(-1);

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && !e.target.value) {
      e.preventDefault();
      setNames((names) => names.slice(0, -1));
    }
  };

  const handleChange = (e) => {
    if (e.target.value.includes("/")) {
      setNames((names) => [...names, ""]);
    } else {
      setNames((names) => [...names.slice(0, -1), e.target.value]);
    }
  };

  return (
    <div className="p-4 container mx-auto bg-black">
      <h3 className="text-white">React Ornek</h3>

      <nav className="flex item-center gap-3">
        {names.slice(0, -1).map((name, index) => (
          <>
            <button className="text-blue-500 hover:underline" key={index}>
              {name}
            </button>
            <div className="text-zinc-500"> / </div>
          </>
        ))}
        <input
          value={value}
          type="text"
          className="border border-zinc-700 rounded-md w-[200px] px-1.5 bg-transparent outline-none text-white"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        ></input>
      </nav>
      <div className="text-white">{JSON.stringify(names, null, 2)}</div>
    </div>
  );
}

export default App;
