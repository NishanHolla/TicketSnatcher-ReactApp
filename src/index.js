// import React, { useContext, createContext, useState } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";
import {MvApp} from './components/homepage/Movies-App';
import './index.css';
import { Shows } from './components/homepage/parts';


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MvApp></MvApp>}></Route>
        <Route path="/shows" element={<Shows></Shows>}></Route>
      </Routes>
    </Router>
  );
}

// function AuthExample() {
//   return (
//     <ProvideAuth>
//     <Router>
//       <div>
//         <AuthButton />

//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/protected">Protected Page</Link>
//           </li>
//         </ul>

//         <Routes>
//           <Route path="/" element={<MvApp />} />
//           <Route path="/public" element={<PublicPage />} />
//           <PrivateRoute path="/protected" element={<ProtectedPage />} />
//           <Route path="/login" element={<LoginPage />} />
//         </Routes>
//       </div>
//     </Router>
//   </ProvideAuth>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   signin(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const authContext = createContext();

// function ProvideAuth({ children }) {
//   const auth = useProvideAuth();
//   return (
//     <authContext.Provider value={auth}>
//       {children}
//     </authContext.Provider>
//   );
// }

// function useAuth() {
//   return useContext(authContext);
// }

// function useProvideAuth() {
//   const [user, setUser] = useState(null);

//   const signin = cb => {
//     return fakeAuth.signin(() => {
//       setUser("user");
//       cb();
//     });
//   };

//   const signout = cb => {
//     return fakeAuth.signout(() => {
//       setUser(null);
//       cb();
//     });
//   };

//   return {
//     user,
//     signin,
//     signout
//   };
// }

// function AuthButton() {
//   let history = useNavigate();
//   let auth = useAuth();

//   return auth.user ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Navigate
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function PublicPage() {
//   return <MvApp></MvApp>;
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }

// function LoginPage() {
//   let history = useNavigate();
//   let location = useLocation();
//   let auth = useAuth();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     auth.signin(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);
