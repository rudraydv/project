import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signin from './pages/Signin';
const App = () =>
{
  return(
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signin' element = {<Signin/>}/>
    </Routes>
   </Router>
    </>
  );
};

export default App;