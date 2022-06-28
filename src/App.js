import logo from "./logo.svg";
import "./App.css";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          throw Error("Some React Error!");
        }}
      >
        Break the world
      </button>
      <button
        onClick={() => {
          throw TypeError("Invalid Type");
        }}
      >
        Type Error
      </button>
      <button
        onClick={() => {
          throw RangeError("Invalid Range");
        }}
      >
        Range Error
      </button>
      <button
        onClick={() => {
          throw Error("Some New Error");
        }}
      >
        Range Error
      </button>
    </div>
  );
}

export default Sentry.withProfiler(App);
