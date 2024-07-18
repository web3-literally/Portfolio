import "./app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "pages/HomePage";
import { LoadingProvider } from "hooks/useLoader";
function App() {
  const toastOption = {
    style: {
      color: '#fff',
      background: '#000000bb',
      fontSize: 20,
      boxShadow: "0px 4px 4px #00000040, inset 0px 4px 14px #00000091"
    },
    duration: 3000,
    success: {
      duration: 3000,
    },
    error: {
      duration: 3000,
    },
  }
  return (
    <LoadingProvider>
      <Router>
        <Toaster
          position="top-center"
          toastOptions={toastOption}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </LoadingProvider>
  );
}

export default App;
