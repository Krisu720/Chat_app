import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import { store } from "./store";
function App() {
  const { username } = store();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={username ? <MainPage /> : <WelcomePage />} />
        <Route
          path="/chats"
          element={username ? <Navigate replace to="/" /> : <WelcomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
