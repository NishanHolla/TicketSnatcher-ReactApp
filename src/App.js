import './App.css'
import Login from "./components/login/login.js"
import Register from "./components/register/register.js"
import MvApp from './components/homepage/Movies-App'
import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import background from './components/ticketsnatcher.png';

// function Appbar(){
//   return(
//     <div style={{display:"block"}}>
//       <nav class="navbar navbar-expand-lg navbar-light bg-danger" style={{height:"70px"}}>
//         <Link to="/home" class="navbar-brand mx-3 mt-3"><p id="title" style={{color:"black" ,fontSize:"30px",fontFamily:"Impact"}}>ticketsnatcher</p></Link>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">
//           <ul class="navbar-nav mx-3">
//             <li class="nav-item">
//               <Link to="/home" class="nav-link" id="home">Home</Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/login" class="nav-link" id="login">Login</Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/register" class="nav-link" id="regis">Register</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

let root= ReactDOM.createRoot(document.getElementById("root"))

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      navigate.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/public" element={<MvApp/>} />
            <Route path="/login" element={<Login/>}/>
            <PrivateRoute path="/protected"></PrivateRoute>
          </Routes>

        </div>
      </Router>
    </ProvideAuth>
  );
}

// function Goto(){
//   root.render(<MvApp></MvApp>);
// }

export default App;

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let navigate = useNavigate();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}