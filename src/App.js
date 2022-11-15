import './App.scss';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home-page/Home.page';
import Navbar from './components/Navigation/Navbar.component';
import Referrals from './pages/Friends-enroll-Page/Referrals.page';

function App() {
  return (
    <div>
    <Navbar/>

      <div className='container'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/referrals' element={<Referrals/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
