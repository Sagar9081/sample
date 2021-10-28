import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import App from "./App";
import About from "./about";
import { Header } from "./nav";
import { Footer } from "./footer";

function Main() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>

        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="*">
            <p>404 Page</p>
          </Route>
        </Switch>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default Main;
