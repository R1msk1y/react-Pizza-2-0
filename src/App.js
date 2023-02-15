import Header from "./components/Header/Header";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <NotFound />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
