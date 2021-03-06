import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Groups, Volunteer, OfficeHours, SignIn, SignUp, Onboard, Community, Calendar, Hourglass} from "./components";


function App() {
  return (

      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/hourglass" exact component={() => <Hourglass />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/community" exact component={() => <Community />} />
            <Route path="/groups" exact component={() => <Groups />} />
            <Route path="/volunteer" exact component={() => <Volunteer />} />
            <Route path="/signin" exact component={() => <SignIn />} />
            <Route path="/signup" exact component={() => <SignUp />} />
            <Route path="/onboard" exact component={() => <Onboard />} />
            <Route path="/officehours" exact component={() => <OfficeHours />} />
            <Route path="/calendar" exact component={() => <Calendar />} />
          </Switch>
          <Footer />
        </Router>
      </div>
  
  );
}

export default App;