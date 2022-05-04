import "./App.css";
import { Header } from "./component/Header/Header";
import { Main } from "./component/Main/Main";
import { Footer } from "./component/Footer/Footer";

const App = () => (
  <div className="App">
    <div className="contant">
      <Header />
      <Main />
      <Footer copyright="C" />
    </div>
  </div>
);

export default App;
