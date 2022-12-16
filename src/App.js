import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.count);

  console.log({ state });
  return (
    <div className="App">
      <h1>Counter:{state} </h1>
    </div>
  );
}

export default App;
