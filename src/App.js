import { Home } from "./pages/home";
import { Feed } from "./pages/feed";
import { Login } from './pages/login'

import { BrowserRouter as Router,
        Routes,
        Route,

} from "react-router-dom";


import { GlobalStyle } from "./styles/global";
import { SignUp } from "./pages/signup";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
    </Router>
  );
}

export default App;
