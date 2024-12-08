// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { PageHeader } from "./layouts/PageHeader";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="bg-violet-400">2</div>
    </div>
  );
}

export default App;
