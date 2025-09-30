"use client";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://electronjs.org/" target="_blank" rel="noopener">
          <img src={"electron.svg"} className="logo" alt="Electron logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener">
          <img src={"react.svg"} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Electron + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to see changes instantly.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Electron and React logos to learn more.
      </p>
    </>
  );
}
