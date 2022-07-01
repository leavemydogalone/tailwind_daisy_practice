import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://placeimg.com/260/400/arch"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="lg:px-6">
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6 text-3xl ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
