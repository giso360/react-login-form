import './App.css';
import Login  from './components/login/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Other from './components/other/Other';
import Account from './components/account/Account';
import SimpleLogin from './components/SimpleLogin';
import SimpleLoginFc from './components/SimpleLoginFc';

function App() {
  return (

    // <Router>
    //   <Routes>


    //     <Route exact path="/" element={<Login/>}/>
    //     <Route exact path="/signup" element={<Signup/>}/>
    //     <Route exact path="/other" element={<Other/>}/>
    //     <Route exact path="/:users" element={<Account />}/>


    //   </Routes>
    // </Router>

    // <div>
    //     <SimpleLogin/>
    // </div>

    <Router>
      <Routes>

        <Route exact path='/' element={<SimpleLogin/>} />

        <Route exact path='/fun' element={<SimpleLoginFc />} />
        
        <Route exact path="/user/:name" element={<Account />}/>

      </Routes>
    </Router>


  );
}

export default App;
