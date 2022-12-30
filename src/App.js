import './App.css';
import SignIn from './Pages/SignIn';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import store from "./redux/createStore";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< SignIn/>} />
            <Route path="home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
