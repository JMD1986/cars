import logo from "./logo.svg";
import "./App.css";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import CarSearch from "./components/CarForm";
import CarValue from "./components/CarValue";
function App() {
  return (
    <div className="App">
      <CarForm></CarForm>
      <CarList></CarList>
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default App;
