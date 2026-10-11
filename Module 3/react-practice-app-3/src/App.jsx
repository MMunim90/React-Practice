import "./App.css";
import Layout from "./components/Layout";
import AuthProvider from "./context/AuthProvider";
// import UncontrolledDemo from './components/UncontrolledDemo';
// import ControlledDemo from './components/ControlledDemo';
// import SignUp from './components/SignUp';

const App = () => {
  
  return (
    <div>
      {/* <UncontrolledDemo/>
            <ControlledDemo/> */}
      {/* <SignUp/> */}

      <AuthProvider>
        <Layout/>
      </AuthProvider>
    </div>
  );
};

export default App;
